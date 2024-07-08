import { createStackNavigator } from "@react-navigation/stack";
import StackOptions from "../constants/StackOptions";
import * as Screens from "../screens";
import React from "react";
const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "@welcome";
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={StackOptions}
    >
      <Stack.Screen name="@welcome" component={Screens.Welcome} />
      <Stack.Screen name="@createAccount" component={Screens.CreateAccount} />
      <Stack.Screen name="@login" component={Screens.Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
