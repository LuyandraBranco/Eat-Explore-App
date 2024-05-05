import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { SearchComponent } from "../../components/SearchComponent";
import { Menu } from "../../components/Menu";
import { ItemSearch } from "../../components/ItemSearch";
import styles from "./styles";
import { Faders, MagnifyingGlass } from "phosphor-react-native";

export function Search({ navigation }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isEditing, setEditing] = useState(false);

  const handleCancel = () => {
    setEditing(false);
    setSearchTerm("");
  };

  const searchRestaurants = async (partialName: string) => {
    try {
      console.log("Searching for:", partialName);
      const response = await axios.get(
        `http://192.168.1.134:3000/restaurante/search/${partialName}`
      );
      console.log("Search results:", response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log("Estou sendo executado");
    if (searchTerm.length > 0) {
      searchRestaurants(searchTerm);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <View style={styles.containerSearch}>
      <StatusBar backgroundColor="#fff" />
      <View style={styles.header}>
        {/* <SearchComponent
          onChange={(text: string) => {
            console.log("Search term:", text);
            setSearchTerm(text);
          }}
        /> */}
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Pesquisar"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            onFocus={() => setEditing(true)}
            onBlur={() => setEditing(false)}
          />

          <View style={styles.iconContainer}>
            <MagnifyingGlass size={20} color="black" />
          </View>
          {isEditing && (
            <TouchableOpacity
              onPress={handleCancel}
              style={styles.cancelButton}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>
          )}
          {!isEditing && (
            <View style={styles.filterIcon}>
              <Faders size={20} color="black" />
            </View>
          )}
        </View>
      </View>
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
    </View>
  );
}
