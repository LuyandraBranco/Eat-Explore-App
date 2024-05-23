import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CaretLeft, Heart } from "phosphor-react-native";
import { NavRestaurant } from "../../components/NavRestaurant";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { StarRating } from "../../components/StarRating";
import { StarReviewsFilter } from "../../components/StarReviewsFilter";
import { ItemUserReview } from "../../components/ItemUserReview";

export function RestaurantReview({ route, navigation }: any) {
  const { restaurantData } = route.params;
  const activeItem = "reviews";

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
        <Text style={styles.review}>{restaurantData.rating}</Text>
        <View style={styles.ratingContainer}>
          <StarRating rating={restaurantData.rating} size={25} />
          <Text style={styles.numberReviews}>(100)</Text>
        </View>
      </View>
      <View style={styles.classifyContainer}>
        <Text style={styles.titleReview}>Classifique a sua experiência</Text>
        <Text style={styles.descriptionClassify}>
          Partilhe a sua experiência e ajude outras pessoas
        </Text>
        <View style={styles.classify}>
          <View style={styles.imgContainer}></View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Review", {
                restaurantData: restaurantData,
              })
            }
          >
            <Text>oi</Text>
          </TouchableOpacity>
          <StarReviewsFilter
            onPress={() => {
              navigation.navigate("Review");
            }}
          />
        </View>
      </View>
      <ScrollView
        style={styles.containerItems}
        showsVerticalScrollIndicator={false}
      >
        <ItemUserReview
          username={"Luyandra Branco"}
          imgUrl={"Oi"}
          rating={4}
          date={"Dezembro 01, 2023"}
          review="Espaço bastante agradável, adorei bastante a estadia foi bastante
          confortável"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
