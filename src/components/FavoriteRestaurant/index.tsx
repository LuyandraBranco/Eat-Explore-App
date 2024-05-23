import { ScrollView } from "react-native";
import styles from "./styles";
import { ItemFavorite } from "../ItemFavorite";

export function FavoriteRestaurant() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ItemFavorite />
      <ItemFavorite />
    </ScrollView>
  );
}
