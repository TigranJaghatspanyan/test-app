import React from "react";
import Navigation from "./navigation";
import { UserContextProvider } from "./contexts/UserContextProvider";
import { LikedItemsProvider } from "./contexts/LikedItemContextProvider";

export default function App(): JSX.Element {
  return (
    <UserContextProvider>
      <LikedItemsProvider>
        <Navigation />
      </LikedItemsProvider>
    </UserContextProvider>
  );
}
