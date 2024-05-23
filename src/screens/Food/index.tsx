import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { CaretLeft, Heart, Star, Timer } from "phosphor-react-native";
import { StarReviewsFilter } from "../../components/StarReviewsFilter";
import { useEffect, useState } from "react";
import axios from "axios";
import { FoodProps } from "../../@types/Food";

export function Food({ route, navigation }: any) {
  const [foodData, setFoodData] = useState<FoodProps | null>(null);
  const [restaurantName, setRestaurantName] = useState<string | null>(null);
  const { id } = route.params;

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await axios.get(
          `https://api-eatexplore.onrender.com/cardapio/${id}`
        );
        const food = response.data;
        setFoodData(food);
        const restaurantResponse = await axios.get(
          `https://api-eatexplore.onrender.com/restaurante/${food.idRestaurante}`
        );
        setRestaurantName(restaurantResponse.data.name);
      } catch (error) {
        console.error("Error fetching food or restaurant data:", error);
      }
    };
    fetchFoodData();
  }, [id]);

  if (!foodData || !restaurantName) {
    return (
      <SafeAreaView style={styles.containerFood}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.containerFood}>
      <StatusBar style="light" backgroundColor="#1E1E1E" />
      <View style={styles.containerFoodItem}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CaretLeft size={32} color="#fff" style={styles.headerArrow} />
          </TouchableOpacity>
          <Text style={styles.food}>{foodData.name}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Heart size={30} color="#fff" style={styles.heart} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerImage}>
          <View style={styles.image}>
            <Image source={{ uri: foodData.photo }} style={styles.img} />
          </View>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{foodData.preco} AOA</Text>
      </View>
      <View>
        <StarReviewsFilter onPress={() => {}} />
      </View>
      <View style={styles.reviewContainer}>
        <View style={styles.time}>
          <Timer size={20} />
          <Text style={styles.txt}>15 min</Text>
        </View>
        <View style={styles.review}>
          <Star size={18} />
          <Text style={styles.txt}>4</Text>
        </View>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        <Text style={styles.foodDescription}>{foodData.descr}</Text>
      </View>
    </SafeAreaView>
  );
}
