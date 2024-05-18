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
import nearItems from "../../data/nearData";

export function Near({ navigation }: any) {

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
    <View style={styles.containerNear}>
      <Text style={styles.title}>Próximos de você</Text>
      <View style={styles.containerItems}>
        <FlatList
          data={nearItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
    </View>
  );
}
