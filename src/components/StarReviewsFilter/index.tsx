import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

export function StarReviewsFilter() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: any) => {
    setRating(rate);
  };

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRating(i)}>
          <MaterialIcons
            name={i <= rating ? "star" : "star-border"}
            size={32}
            style={i <= rating ? styles.selectedStar : styles.unselectedStar}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.stars}>{renderStars()}</View>
    </View>
  );
}

