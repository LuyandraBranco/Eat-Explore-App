import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { ItemSearch } from "../../components/ItemSearch";
import styles from "./styles";

export function SearchResults({ searchResults, navigation, isEditing }: any) {
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
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantAbout", {
                  restaurantData: item,
                })
              }
            >
              <ItemSearch
                name={item.name}
                img={
                  "https://lh5.googleusercontent.com/p/AF1QipM764RTHzPhbfkC0RF7KvcQtYckebLQYLuS1g69=w260-h175-n-k-no"
                }
                location={item.address}
                price={item.price}
                rating={4}
                navigation={navigation}
              />
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
