import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { StarRating } from "../StarRating";

interface ItemPhotoProps {
  url: string;
}

export function ItemPhoto({ url }: ItemPhotoProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} resizeMode="cover" />
    </View>
  );
}
