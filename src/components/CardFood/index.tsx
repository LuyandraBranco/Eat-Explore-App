import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

interface CardFoodProps {
  image: string;
  foodName: string;
  onPress: () => void;
}

export function CardFood({ image, foodName, onPress }: CardFoodProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{foodName}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
