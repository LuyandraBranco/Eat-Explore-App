import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CaretLeft, Heart } from "phosphor-react-native";
import { NavRestaurant } from "../../components/NavRestaurant";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { Card } from "../../components/Card";
import { CardMenu } from "../../components/CardMenu";
import { CardMenuRestaurant } from "../../components/CardMenuRestaurant";

export function RestaurantMenu({ route, navigation }: any) {
  const { restaurantData } = route.params;
  const activeItem = "menu";

  return (
    <SafeAreaView style={styles.containerRestaurantMenu}>
      <View style={styles.containerRestaurantItem}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CaretLeft size={24} color="#000" style={styles.headerArrow} />
          </TouchableOpacity>
          <Text style={styles.restaurantName}>{restaurantData.name}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Heart size={25} color="#F55F5F" />
          </TouchableOpacity>
        </View>
        <View style={styles.containerImage}>
          <View style={styles.image}>
            <Image
              source={require("../../assets/images/lookal.png")}
              style={styles.img}
            />
          </View>
        </View>
        <NavRestaurant
          navigation={navigation}
          restaurantData={restaurantData}
          activeItem={activeItem}
        />
      </View>
      <ScrollView
        style={styles.containerItems}
        showsVerticalScrollIndicator={false}
      >
        <CardMenu />
        <CardMenuRestaurant navigation={navigation} />
        <CardMenuRestaurant navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
