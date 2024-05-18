import React from "react";
import { View } from "react-native";
import styles from "./styles";

const Dots = ({ activeIndex, length }:any) => {
  return (
    <View style={styles.dotsContainer}>
      {Array.from({ length }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.carouselDot,
            index === activeIndex ? styles.carouselDot : styles.carouselInactiveDot,
          ]}
        />
      ))}
    </View>
  );
};

export default Dots;
