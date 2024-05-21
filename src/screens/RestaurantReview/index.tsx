import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CaretLeft, Heart } from "phosphor-react-native";
import { NavRestaurant } from "../../components/NavRestaurant";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { StarRating } from "../../components/StarRating";

export function RestaurantReview({ route, navigation }: any) {
  const { restaurantData } = route.params;
  const [activeItem, setActiveItem] = useState("reviews");

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
      <View style={styles.geralReviewContainer}>
        <Text style={styles.titleReview}>Classificação Geral</Text>
        <Text style={styles.review}>5,0</Text>
        <View style={styles.ratingContainer}>
          <StarRating rating={5} size={25} />
          <Text style={styles.numberReviews}>(100)</Text>
        </View>
      </View>
      <ScrollView
        style={styles.containerItems}
        showsVerticalScrollIndicator={false}
      ></ScrollView>
    </SafeAreaView>
  );
}
