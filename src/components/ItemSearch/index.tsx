import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { StarRating } from "../StarRating";

interface ItemSearchProps {
  name: string;
  img?: string;
  location: string;
  price?: number;
  navigation: any;
  rating: number;
}

export function ItemSearch({
  name,
  img,
  location,
  price,
  rating,
}: ItemSearchProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: img }} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <StarRating rating={rating} />
        <Text style={styles.subtitle}>{location}</Text>
      </View>
    </View>
  );
}
