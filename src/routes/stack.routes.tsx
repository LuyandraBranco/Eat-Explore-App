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
import { Food } from "../screens/Food";
import { RestaurantAbout } from "../screens/RestaurantAbout";
import { RestaurantMenu } from "../screens/RestaurantMenu";
import { Profile } from "../screens/Profile";

const { Screen, Navigator } = createStackNavigator();

export function StackRouter() {
  return (
    <Navigator>
       <Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
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
      <Screen name="Food" component={Food} options={{ headerShown: false }} />
      <Screen
        name="RestaurantMenu"
        component={RestaurantMenu}
        options={{ headerShown: false }}
      />
      <Screen
        name="RestaurantAbout"
        component={RestaurantAbout}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
