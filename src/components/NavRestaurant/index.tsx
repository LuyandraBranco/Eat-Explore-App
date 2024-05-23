import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import axios from "axios";
import styles from "./styles";
import { Restaurant } from "../../@types/Restaurant";

export function NavRestaurant({ navigation, restaurantId, activeItem }: any) {
  const [restaurantData, setRestaurantData] = useState<Restaurant | null>(null);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await axios.get(
          `https://api-eatexplore.onrender.com/restaurante/${restaurantId}`
        );
        setRestaurantData(response.data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchRestaurantData();
  }, [restaurantId]);

  if (!restaurantData) {
    return <Text>Loading...</Text>;
  }

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
