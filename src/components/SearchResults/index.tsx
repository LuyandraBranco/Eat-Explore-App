import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { ItemSearch } from "../../components/ItemSearch";
import styles from "./styles";
import { SearchResult } from "../../screens/Search";

interface SearchResultsProps {
  searchResults: SearchResult[];
  navigation: any;
  isEditing: boolean;
}

export function SearchResults({
  searchResults,
  navigation,
  isEditing,
}: SearchResultsProps) {
  return (
    <View style={styles.containerItem}>
      {!isEditing && searchResults.length === 0 && (
        <Text style={styles.txt}>
          Que tipo de prato ou restaurante você está buscando hoje?
        </Text>
      )}
      {searchResults.length > 0 && (
        <FlatList
          data={searchResults}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                if (item.type === "restaurant") {
                  navigation.navigate("RestaurantAbout", {
                    restaurantData: item,
                  });
                } else if (item.type === "food") {
                  navigation.navigate("Food", {
                    foodData: item,
                  });
                }
              }}
            >
              <ItemSearch result={item} navigation={navigation} />
            </TouchableOpacity>
          )}
        />
      )}
      {searchResults.length === 0 && isEditing && (
        <Text style={styles.txt}>Nada foi encontrado.</Text>
      )}
    </View>
  );
}
