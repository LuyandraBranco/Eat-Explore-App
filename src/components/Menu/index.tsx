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
import { TouchableOpacity } from "react-native-gesture-handler";

export function Menu({ navigation }: any) {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <View style={styles.containerMenu}>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <View style={styles.itemMenu}>
          <House
            size={24}
            color={currentPage === "Home" ? "#E5383B" : "#000"}
          />
          <Text
            style={[
              styles.txt,
              { color: currentPage === "Home" ? "#E5383B" : "#000" },
            ]}
          >
            Home
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.itemMenu}>
        <ShoppingCartSimple
          size={24}
          color={currentPage === "Carrinho" ? "#E5383B" : "#000"}
        />
        <Text
          style={[
            styles.txt,
            { color: currentPage === "Carrinho" ? "#E5383B" : "#000" },
          ]}
        >
          Carrinho
        </Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
      <View style={styles.itemMenu}>
        <MagnifyingGlass
          size={24}
          color={currentPage === "Pesquisar" ? "#E5383B" : "#000"}
        />
        <Text
          style={[
            styles.txt,
            { color: currentPage === "Pesquisar" ? "#E5383B" : "#000" },
          ]}
        >
          Pesquisar
        </Text>
      </View>
      </TouchableOpacity>
      <View style={styles.itemMenu}>
        <Bookmarks
          size={24}
          color={currentPage === "Pedidos" ? "#E5383B" : "#000"}
        />
        <Text
          style={[
            styles.txt,
            { color: currentPage === "Pedidos" ? "#E5383B" : "#000" },
          ]}
        >
          Pedidos
        </Text>
      </View>
      <View style={styles.itemMenu}>
        <Heart
          size={24}
          color={currentPage === "Favoritos" ? "#E5383B" : "#000"}
        />
        <Text
          style={[
            styles.txt,
            { color: currentPage === "Favoritos" ? "#E5383B" : "#000" },
          ]}
        >
          Favoritos
        </Text>
      </View>
    </View>
  );
}
