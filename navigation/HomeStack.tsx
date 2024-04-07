import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import { BottomNavigator } from "../utils/bottomNavigation";
import Header from "../components/shared/header";
import Profile from "../screens/profile";
import { Routes } from "./routes";
import Login from "../screens/login";
import Wishlist from "../screens/wishlist";

const HomeStack = (): JSX.Element => {
  const StackNavigator = createStackNavigator();

  return (
    <StackNavigator.Navigator initialRouteName={BottomNavigator.HOME}>
      <StackNavigator.Screen
        name={BottomNavigator.HOME}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.PROFILE}
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={Routes.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.WISHLIST}
        component={Wishlist}
        options={{
          headerShown: false,
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default HomeStack;
