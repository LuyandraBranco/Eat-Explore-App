import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import styles from "./styles";

export function PriceFilter({ onPriceChange }: any) {
  const [price, setPrice] = useState(0);

  const handlePriceChange = (value: any) => {
    setPrice(value);
    onPriceChange(value);
  };

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={500}
        maximumValue={100000}
        minimumTrackTintColor="#E5383B"
        maximumTrackTintColor="#000000"
        step={500}
        value={price}
        onValueChange={handlePriceChange}
      />
      <Text style={styles.price}>Preço Selecionado: {price}</Text>
    </View>
  );
}
