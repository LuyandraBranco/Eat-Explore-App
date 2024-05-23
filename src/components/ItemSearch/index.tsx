import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { StarRating } from "../StarRating";
import { SearchResult } from "../../screens/Search";

interface ItemSearchProps {
  result: SearchResult;
  navigation: any;
}

export function ItemSearch({ result, navigation }: ItemSearchProps) {
  const handlePress = () => {
    if (result.type === "restaurant") {
      navigation.navigate("RestaurantAbout", { restaurantData: result });
    } else if (result.type === "food") {
      navigation.navigate("Food", { id: result.id });
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: result.photo }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{result.name}</Text>
        {result.type === "restaurant" ? (
          <>
            <StarRating rating={result.rating} size={18} />
            <Text style={styles.subtitle}>{result.address}</Text>
          </>
        ) : (
          <>
            {/* <StarRating rating={result.rating} size={18} /> */}
            <Text>${result.preco}</Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}
