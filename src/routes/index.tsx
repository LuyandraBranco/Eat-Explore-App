import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabsRouter } from "./tabs.routes";
import { createStackNavigator } from "@react-navigation/stack";
import { SplachScreen } from "../screens/SplachScreen";
import { Food } from "../screens/Food";
import { Profile } from "../screens/Profile";
import { RestaurantMenu } from "../screens/RestaurantMenu";
import { RestaurantAbout } from "../screens/RestaurantAbout";
import { SignUp } from "../screens/SignUp";
import { Onboarding } from "../screens/Onboarding";
import { AuthScreen } from "../screens/AuthScreen";
import { SignIn } from "../screens/SignIn";

export function Routes() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabsRouter} />
        <Stack.Screen name="SplachScreen" component={SplachScreen} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="RestaurantAbout" component={RestaurantAbout} />
        <Stack.Screen name="RestaurantMenu" component={RestaurantMenu} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Food" component={Food} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
