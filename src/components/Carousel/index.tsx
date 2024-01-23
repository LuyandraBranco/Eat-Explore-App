import React from "react";
import { Dimensions, View, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import carouselItems from "../../data/carouselData";
import styles from "./styles";

export function CarouselItem() {
  const width = 375;
  const height = 160;

  return (
    <Carousel
      loop
      width={width}
      height={height}
      autoPlay={true}
      data={carouselItems}
      scrollAnimationDuration={8000}
      onSnapToItem={(index) => console.log("current index:", index)}
      renderItem={({ item }) => (
        <View style={styles.carouselItem}>
          <Image source={item.image} style={styles.carouselImage} />
        </View>
      )}
    />
  );
}
