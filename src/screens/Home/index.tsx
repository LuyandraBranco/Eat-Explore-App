import { View, Text, Image, Dimensions } from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";
import { Menu } from "../../components/Menu";
import { StatusBar } from "expo-status-bar";
import { CarouselItem } from "../../components/Carousel";
import { Category } from "../../components/Category";
import { Near } from "../../components/Near";
import { BestReviews } from "../../components/BestReviews";

export function Home({ navigation }: any) {
  return (
    <View style={styles.containerHome}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.headerTxt}>
            Olá, <Text style={styles.txt}>Luyandra</Text>
          </Text>
          <Text style={styles.headerDescription}>
            O que está procurando hoje?
          </Text>
        </View>
        <View style={styles.containerImage}>
          <Image
            source={require("../../assets/images/image3.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
      <CarouselItem />
      <Category />
      <BestReviews/>
      <Near />
      <Menu />
    </View>
  );
}
