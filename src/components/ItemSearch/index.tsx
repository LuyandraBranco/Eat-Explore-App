import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

interface ItemSearchProps {
  name: string;
  img?: string; // tornando a imagem opcional
  location: string;
  price?: number;
  navigation: any;
}

export function ItemSearch({
  name,
  img,
  location,
  price,
  navigation,
}: ItemSearchProps) {
  return (
    <ImageBackground
      source={img ? { uri: img } : require("../../assets/images/logo.jpeg")}
      style={styles.containerItem}
    >
      <View style={styles.item}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>{price}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </ImageBackground>
  );
}
