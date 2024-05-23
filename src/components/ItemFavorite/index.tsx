import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useRef } from "react";
import styles from "./styles";

export function ItemFavorite({ name, rating, imageSrc, navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageSrc }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Grelhado</Text>
        <Text style={styles.subtitle}>Avaliação: {rating}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Ionicons name={"heart"} size={28} color="#E5383B" />
      </TouchableOpacity>
    </View>
  );
}
