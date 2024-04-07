import React, { createContext, useContext, useState } from "react";

const LikedItemsContext = createContext();

export const useLikedItems = () => {
  const context = useContext(LikedItemsContext);
  if (!context) {
    throw new Error("useLikedItems must be used within a LikedItemsProvider");
  }
  return context;
};

export const LikedItemsProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (itemId) => {
    if (likedItems.includes(itemId)) {
      setLikedItems(likedItems.filter((item) => item !== itemId));
    } else {
      setLikedItems([...likedItems, itemId]);
    }
  };

  const isLiked = (itemId) => {
    return likedItems.includes(itemId);
  };

  return (
    <LikedItemsContext.Provider value={{ likedItems, toggleLike, isLiked }}>
      {children}
    </LikedItemsContext.Provider>
  );
};
