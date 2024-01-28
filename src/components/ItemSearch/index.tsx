import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { MagnifyingGlass, Faders } from "phosphor-react-native";
import styles from "./styles";

interface ItemSearchProps {
  name: string;
  img: string;
  location: string;
  price?: number;
  navigation: any;
}
export function ItemSearch({
  name,
  img,
  location,
  price,
  navigation,
}: ItemSearchProps) {
  return (
    <View style={styles.containerItem}>
      <Image
        source={require("../../assets/images/logo.jpeg")}
        style={styles.imagem}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>{price}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
}
