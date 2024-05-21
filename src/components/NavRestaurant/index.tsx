import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

export function NavRestaurant({ navigation, restaurantData, activeItem }: any) {
  return (
    <View style={styles.nav}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RestaurantAbout", { restaurantData })
        }
      >
        <Text
          style={[styles.itemNav, activeItem === "about" && styles.activeItem]}
        >
          Sobre nós
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RestaurantMenu", { restaurantData })
        }
      >
        <Text
          style={[styles.itemNav, activeItem === "menu" && styles.activeItem]}
        >
          Menu
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RestaurantReview", { restaurantData })
        }
      >
        <Text
          style={[
            styles.itemNav,
            activeItem === "reviews" && styles.activeItem,
          ]}
        >
          Avaliações
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RestaurantPhotos", { restaurantData })
        }
      >
        <Text
          style={[styles.itemNav, activeItem === "photos" && styles.activeItem]}
        >
          Fotos
        </Text>
      </TouchableOpacity>
    </View>
  );
}
