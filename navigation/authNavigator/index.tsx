import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../routes";
import Login from "../../screens/login";
import { BottomNavigator } from "../../utils/bottomNavigation";
import Home from "../../screens/home";

const AuthStackNavigator = (): JSX.Element => {
  const StackNavigator = createStackNavigator();

  return (
    <StackNavigator.Navigator initialRouteName={Routes.AUTH}>
      <StackNavigator.Screen
        name={Routes.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.HOME}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default AuthStackNavigator;
