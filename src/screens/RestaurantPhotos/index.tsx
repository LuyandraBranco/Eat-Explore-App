import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CaretLeft, Heart } from "phosphor-react-native";
import { NavRestaurant } from "../../components/NavRestaurant";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { ItemPhoto } from "../../components/ItemPhoto";
import ImageView from "react-native-image-viewing";

export function RestaurantPhotos({ route, navigation }: any) {
  const { restaurantData } = route.params;
  const activeItem = "photos";
  const [visible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_Rqw9bSjJhxJr_iZO2963VEgOZ7H0vA4_w&s" },
    { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_Rqw9bSjJhxJr_iZO2963VEgOZ7H0vA4_w&s" },
    { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_Rqw9bSjJhxJr_iZO2963VEgOZ7H0vA4_w&s" },
    { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_Rqw9bSjJhxJr_iZO2963VEgOZ7H0vA4_w&s" },
    { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_Rqw9bSjJhxJr_iZO2963VEgOZ7H0vA4_w&s" },
    { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_Rqw9bSjJhxJr_iZO2963VEgOZ7H0vA4_w&s" },
    { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_Rqw9bSjJhxJr_iZO2963VEgOZ7H0vA4_w&s" },
  ];

  const openImage = (index: number) => {
    setSelectedImage(index);
    setIsVisible(true);
  };

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
        <View style={styles.items}>
          {images.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => openImage(index)}>
              <ItemPhoto url={image.uri} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <ImageView
        images={images}
        imageIndex={selectedImage}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </SafeAreaView>
  );
}
