import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { ItemSearch } from "../../components/ItemSearch";
import styles from "./styles"; // Assuma que o estilo está corretamente configurado

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
                img={item.photoPath}
                location={item.address}
                price={item.price}
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
