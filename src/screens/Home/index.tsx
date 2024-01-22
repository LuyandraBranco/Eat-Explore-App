import { View, Text, Image } from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";
import { Menu } from "../../components/Menu";
import { StatusBar } from "expo-status-bar";
// import carouselItems from "../../data/carouselData";

export function Home({ navigation }: any) {
  return (
    <View style={styles.containerHome}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.headerTxt}>
            Olá, <Text style={styles.txt}>Luyandra</Text>
          </Text>
          <Text style={styles.headerDescription}>
            O que está procurando hoje?
          </Text>
        </View>
        <View style={styles.containerImage}>
        <Image
          source={require('../../assets/images/image3.png')}
          style={styles.image}
          resizeMode="contain"
        />
        </View>
        {/* <Carousel
        layout="default"
        data={carouselItems}
        renderItem={_renderItem}
        sliderWidth={340}
        itemWidth={340}
        autoplay
        loop
        autoplayInterval={5000}
        dotStyle={styles.carouselDot}
        inactiveDotStyle={styles.carouselInactiveDot}
      /> */}
      </View>
      <Menu />
    </View>
  );
}
