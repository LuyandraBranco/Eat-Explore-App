import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { FavoriteFood } from "../../components/FavoriteFood";
import { FavoriteRestaurant } from "../../components/FavoriteRestaurant";

export function Favorite({ navigation }: any) {
  const [activeTab, setActiveTab] = useState("restaurantes");

  return (
    <SafeAreaView style={styles.favoriteContainer}>
      <StatusBar style="light" backgroundColor="#101114" />
      <View style={styles.header}>
        <Text style={styles.headerName}>Favoritos</Text>
      </View>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => setActiveTab("restaurantes")}>
          <Text
            style={[
              styles.txtNav,
              activeTab === "restaurantes" && styles.activeTab,
            ]}
          >
            Restaurantes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("comidas")}>
          <Text
            style={[styles.txtNav, activeTab === "comidas" && styles.activeTab]}
          >
            Comidas
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === "comidas" ? <FavoriteFood /> : <FavoriteRestaurant />}
    </SafeAreaView>
  );
}
