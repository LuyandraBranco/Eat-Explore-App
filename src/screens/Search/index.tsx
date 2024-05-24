import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import axios from "axios";
import { SearchInput } from "../../components/SearchInput";
import styles from "./styles";
import { FilterModal } from "../../components/FilterModal";
import { SearchResults } from "../../components/SearchResults";

export type RestaurantResult = {
  id: number;
  type: "restaurant";
  email: string;
  password: string;
  name: string;
  address: string;
  rating: number;
  horaAbertura: string;
  horaFechamento: string;
  maps: string;
  photo: string;
  bairroId: number;
  nif: string;
  phone1: number;
  phone2?: number | null;
};

export type FoodResult = {
  id: number;
  type: "food";
  name: string;
  photo: string;
  descr: string;
  preco: number;
  idRestaurante: number;
  data: string;
};

export type SearchResult = RestaurantResult | FoodResult;

export function Search({ navigation }: any) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isEditing, setEditing] = useState<boolean>(false);
  const [isFilterVisible, setFilterVisible] = useState<boolean>(false);

  const toggleFilterModal = () => {
    setFilterVisible(!isFilterVisible);
  };

  const handleCancel = () => {
    setEditing(false);
    setSearchTerm("");
  };

  const search = async (partialName: string) => {
    try {
      console.log("Searching for:", partialName);
      const [restaurantsResponse, foodsResponse] = await Promise.all([
        axios.get<Omit<RestaurantResult, "type">[]>(
          `https://api-eatexplore.onrender.com/restaurante/search/${partialName}`
        ),
        axios.get<Omit<FoodResult, "type">[]>(
          `https://api-eatexplore.onrender.com/cardapio/search/${partialName}`
        ),
      ]);

      const restaurants: RestaurantResult[] = restaurantsResponse.data.map(
        (item) => ({
          ...item,
          type: "restaurant",
        })
      );

      const foods: FoodResult[] = foodsResponse.data.map((item) => ({
        ...item,
        type: "food",
      }));

      const combinedResults: SearchResult[] = [...restaurants, ...foods];

      console.log("Search results:", combinedResults);
      setSearchResults(combinedResults);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      search(searchTerm);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <KeyboardAvoidingView
      style={styles.containerSearch}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isEditing={isEditing}
        setEditing={setEditing}
        handleCancel={handleCancel}
        toggleFilterModal={toggleFilterModal}
      />
      <FilterModal
        visible={isFilterVisible}
        onClose={toggleFilterModal}
        onApply={setSearchResults}
      />
      <SearchResults
        searchResults={searchResults}
        navigation={navigation}
        isEditing={isEditing}
      />
    </KeyboardAvoidingView>
  );
}
