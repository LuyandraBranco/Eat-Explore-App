import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styles';

export function PriceFilter() {
  const [price, setPrice] = useState(0);

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#E5383B"
        maximumTrackTintColor="#000000"
        step={1}
        value={price}
        onValueChange={(value) => setPrice(value)}
      />
      <Text style={styles.price}>Preço Selecionado: {price}</Text>
    </View>
  );
}
