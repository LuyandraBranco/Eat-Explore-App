import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Checkbox from "expo-checkbox";
import axios from "axios";
import styles from "./styles";

export function CookingFilter() {
  const [culinaryTypes, setCulinaryTypes] = useState<any[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  useEffect(() => {
    const fetchCulinaryTypes = async () => {
      try {
        const response = await axios.get(
          "https://api-eatexplore.onrender.com/culinaria"
        );
        setCulinaryTypes(response.data);
      } catch (error) {
        console.error("Error fetching culinary types:", error);
      }
    };

    fetchCulinaryTypes();
  }, []);

  const handleSelection = (culinaryId: number) => {
    const newSelectedOptions = selectedOptions.includes(culinaryId)
      ? selectedOptions.filter((id) => id !== culinaryId)
      : [...selectedOptions, culinaryId];
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <ScrollView style={styles.cookingContainer}>
      {culinaryTypes.map((culinary: any) => (
        <View key={culinary.id} style={styles.checkboxContainer}>
          <Checkbox
            value={selectedOptions.includes(culinary.id)}
            onValueChange={() => handleSelection(culinary.id)}
            color={
              selectedOptions.includes(culinary.id) ? "#E5383B" : undefined
            }
          />
          <Text style={styles.label}>{culinary.culinaria}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
