
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import StackOptions from "../constants/StackOptions";
import { Home } from "../screens";
import CustomDrawer from "../components/CustomDrawer";
import SendMoney from "../screens/sendMoney";
import ReceiveMoney from "../screens/receiveMoney";
const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={StackOptions} initialRouteName="@main">
      <Stack.Screen name="@main" component={Home} />
      <Stack.Screen name="@sendMoney" component={SendMoney} />
      <Stack.Screen name="@receiveMoney" component={ReceiveMoney} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
