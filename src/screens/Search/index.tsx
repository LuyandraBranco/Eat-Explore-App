import { View, Text, Image, Dimensions } from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";
import { Menu } from "../../components/Menu";
import { StatusBar } from "expo-status-bar";
import { CarouselItem } from "../../components/Carousel";
import { Category } from "../../components/Category";
import { Near } from "../../components/Near";
import { BestReviews } from "../../components/BestReviews";
import { SearchComponent } from "../../components/SearchComponent";

export function Search({ navigation }: any) {
  return (
    <View style={styles.containerSearch}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <SearchComponent />
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.txt}>Que tipo de prato ou restaurante você está buscando hoje?</Text>
      </View>

      <Menu />
    </View>
  );
}
