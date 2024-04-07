import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import useAsyncEffect from "use-async-effect";
import { AsyncStorageService } from "../service/asyncStorage.service";

type UserContextType = {
  isAuth: boolean;
  user: any | null;
  updateUser: (isAuth?: boolean) => void;
  route?: string;
  updateRoute?: (route: string) => void;
  refetchOrders?: boolean;
  setRefetchOrders?: Dispatch<SetStateAction<boolean>>;
  refetchNotifications?: boolean;
  setRefetchNotifications?: Dispatch<SetStateAction<boolean>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<{
    isAuth: boolean;
    user: any | null;
  }>({
    isAuth: false,
    user: null,
  });
  const [route, setRoute] = useState<string>("");

  useAsyncEffect(async () => {
    const token = await AsyncStorageService.getItemAsync("accessToken");
    if (token) {
      const user = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }).then((res) => res.json());

      if ("status" in user) {
        updateUser(null);

        await AsyncStorageService.removeItemAsync("accessToken");

        return;
      }

      updateUser(user);
    }
  }, []);

  const updateRoute = (route: string): void => {
    setRoute(route);
  };

  const updateUser = (newUser: any | null): void => {
    setUser({
      user: newUser,
      isAuth: true,
    });
  };

  const contextValue: UserContextType = {
    ...user,
    updateUser,
    route,
    updateRoute,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider, useUserContext };
