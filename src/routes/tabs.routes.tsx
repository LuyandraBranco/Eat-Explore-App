import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Home } from "../screens/Home";
import { Search } from "../screens/Search";
import { Food } from "../screens/Food";
import { Favorite } from "../screens/Favorite";
import { Requests } from "../screens/Requests";
import { Cart } from "../screens/Cart";

const Tab = createBottomTabNavigator();

const TabButton = ({ item, onPress, accessibilityState }: any) => {
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <View
        style={[
          styles.circleContainer,
          focused && styles.circleContainerFocused,
        ]}
      >
        <Ionicons
          name={focused ? item.activeIcon : item.inActiveIcon}
          size={22}
          color={focused ? "#FFF" : "#333"}
          style={focused && styles.iconFocused}
        />
      </View>
      {focused && <Text style={styles.label}>{item.label}</Text>}
    </TouchableOpacity>
  );
};

export function TabsRouter() {
  const TabElements = [
    {
      route: "Home",
      label: "Home",
      activeIcon: "home",
      inActiveIcon: "home-outline",
      component: Home,
    },
    {
      route: "Carrinho",
      label: "Carrinho",
      activeIcon: "cart",
      inActiveIcon: "cart-outline",
      component: Cart,
    },
    {
      route: "Search",
      label: "Procurar",
      activeIcon: "search",
      inActiveIcon: "search-outline",
      component: Search,
    },
    {
      route: "Pedidos",
      label: "Pedidos",
      activeIcon: "search",
      inActiveIcon: "search-outline",
      component: Requests,
    },
    {
      route: "Favoritos",
      label: "Favoritos",
      activeIcon: "heart",
      inActiveIcon: "heart-outline",
      component: Favorite,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          // position: "absolute",
          margin: 16,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {TabElements.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <TabButton {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  circleContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  circleContainerFocused: {
    backgroundColor: "#E5383B",
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    borderRadius: 25,
    position: "relative",
    top: -30,
  },
  iconFocused: {
    position: "relative",
  },
  label: {
    marginTop: -25,
    fontSize: 12,
    color: "#E5383B",
  },
});
