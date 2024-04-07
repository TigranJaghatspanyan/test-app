// NavigationContext.tsx

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the shape of the context data
interface NavigationContextType {
  lastRouteName: string | null;
  setLastRouteName: Dispatch<SetStateAction<string | null>>;
}

// Create the context with a default value
const NavigationContext = createContext<NavigationContextType>({
  lastRouteName: null,
  setLastRouteName: () => {},
});

// Define the type for the provider's props
type NavigationProviderProps = {
  children: ReactNode;
};

// Create a custom hook to use the navigation context
export const useNavigationContext = () => useContext(NavigationContext);

// Create the provider component
export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [lastRouteName, setLastRouteName] = useState<string | null>(null);

  return (
    <NavigationContext.Provider value={{ lastRouteName, setLastRouteName }}>
      {children}
    </NavigationContext.Provider>
  );
};
