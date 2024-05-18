import React, { useState } from "react";
import { Dimensions, View, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import carouselItems from "../../data/carouselData";
import { Dots } from "../Dots";
import styles from "./styles";

export function CarouselItem() {
  const width = 358;
  const height = 160;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View>
      <Carousel
        loop
        width={width}
        height={height}
        autoPlay={true}
        data={carouselItems}
        scrollAnimationDuration={8000}
        onSnapToItem={(index) => {
          setActiveIndex(index);
          console.log("current index:", index);
        }}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={item.image} style={styles.carouselImage} />
          </View>
        )}
      />
      <Dots activeIndex={activeIndex} length={carouselItems.length} />
    </View>
  );
}
