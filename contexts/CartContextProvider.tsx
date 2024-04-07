import React, { createContext, useContext, useState, PropsWithChildren } from 'react';
import useAsyncEffect from 'use-async-effect';
import { CartService } from '../services/cart.service';
import { ICartResponse } from '../interfaces/cart.interface';
import { useUserContext } from './UserContextProvider';
import { ApiError } from '../services/ApiBase';

// Define the shape of the context data
interface CartContextType {
  carts: ICartResponse;
  updateCartItems: (id: number, cart: ICartResponse) => void;
  getCartItems: () => Promise<void>;
}

// Create the context with a default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a custom hook to use the navigation context
export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }
  return context;
};

// Create the provider component
export const CartContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const cartService = new CartService();
  const { isAuth } = useUserContext();

  const [cartItems, setCartItems] = useState<ICartResponse>({
    cartItems: [],
    total: 0,
  });

  const getCartItems = async (): Promise<void> => {
    const data: ICartResponse | ApiError = await cartService.getCartItems();

    if ('errorMessage' in data) {
      return;
    }

    setCartItems(data as ICartResponse);
  };

  useAsyncEffect(async () => {
    if (isAuth) {
      await getCartItems();
    }
  }, [isAuth]);

  const updateCartItems = (id: number, cart: ICartResponse): void => {
    setCartItems(cart);
  };

  return (
    <CartContext.Provider
      value={{
        carts: cartItems,
        updateCartItems,
        getCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
