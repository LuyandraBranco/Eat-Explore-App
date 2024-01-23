import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding } from "../screens/Onboarding";
import { SplachScreen } from "../screens/SplachScreen";
import { AuthScreen } from "../screens/AuthScreen";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { Home } from "../screens/Home";
import { Search } from "../screens/Search";

const { Screen, Navigator } = createStackNavigator();

export function StackRouter() {
  return (
    <Navigator>
      <Screen
        name="SplachScreen"
        component={SplachScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
