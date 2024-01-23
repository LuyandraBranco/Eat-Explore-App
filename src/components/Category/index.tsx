import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";
import {
  Bookmarks,
  Heart,
  House,
  MagnifyingGlass,
  ShoppingCartSimple,
} from "phosphor-react-native";
import categoryItems from "../../data/categoryData";

export function Category({ navigation }: any) {

  // Função para renderizar cada item da lista
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.itemCategory}
      onPress={() => {
        console.log(`Categoria selecionada: ${item.title}`);
      }}
    >
      <Image source={item.image} style={styles.image}/>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.containerCategory}>
      <Text style={styles.title}>Categorias</Text>
      <View style={styles.containerItems}>
        <FlatList
          data={categoryItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.containerItems}
        />
      </View>
    </View>
  );
}
