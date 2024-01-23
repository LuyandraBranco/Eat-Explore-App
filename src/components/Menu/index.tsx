import { View, Text, Image } from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";
import {
  Bookmarks,
  Heart,
  House,
  MagnifyingGlass,
  ShoppingCartSimple,
} from "phosphor-react-native";

export function Menu({ navigation }: any) {
  return (
    <View style={styles.containerMenu}>
      <View style={styles.itemMenu}>
        <House size={24} color="#000000" />
        <Text style={styles.txt}>Home</Text>
      </View>
      <View style={styles.itemMenu}>
        <ShoppingCartSimple size={24} color="#000000" />
        <Text style={styles.txt}>Carrinho</Text>
      </View>
      <View style={styles.itemMenu}>
        <MagnifyingGlass size={24} color="#000000" />
        <Text style={styles.txt}>Pesquisar</Text>
      </View>
      <View style={styles.itemMenu}>
        <Bookmarks size={24} color="#000000" />
        <Text style={styles.txt}>Pedidos</Text>
      </View>
      <View style={styles.itemMenu}>
        <Heart size={24} color="#000000" />
        <Text style={styles.txt}>Favoritos</Text>
      </View>
    </View>
  );
}
