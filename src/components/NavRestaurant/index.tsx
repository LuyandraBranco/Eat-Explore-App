import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

export function NavRestaurant({ navigation }: any) {
  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => navigation.navigate("RestaurantAbout", {})}>
        <Text style={styles.itemNav}>Sobre nós</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("RestaurantMenu", {})}>
        <Text style={styles.itemNav}>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Search", {})}>
        <Text style={styles.itemNav}>Avaliações</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Search", {})}>
        <Text style={styles.itemNav}>Fotos</Text>
      </TouchableOpacity>
    </View>
  );
}
