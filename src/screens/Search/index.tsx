import React, { useState, useEffect } from "react";
import { View } from "react-native";
import axios from "axios";
import { SearchInput } from "../../components/SearchInput";
import styles from "./styles";
import { FilterModal } from "../../components/FilterModal";
import { SearchResults } from "../../components/SearchResults";

export function Search({ navigation }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [isFilterVisible, setFilterVisible] = useState(false);

  const toggleFilterModal = () => {
    setFilterVisible(!isFilterVisible);
  };

  const applyFilters = (filters: any) => {
    // Lógica para aplicar os filtros
    console.log("Filtros aplicados:", filters);
  };

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
    if (searchTerm.length > 0) {
      searchRestaurants(searchTerm);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <View style={styles.containerSearch}>
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
        onApply={applyFilters}
      />
      <SearchResults
        searchResults={searchResults}
        navigation={navigation}
        isEditing={isEditing}
      />
    </View>
  );
}
