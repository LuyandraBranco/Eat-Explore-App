import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Checkbox from "expo-checkbox";
import axios from "axios";
import styles from "./styles";

export function CookingFilter({ onSelectionChange }: any) {
  const [culinaryTypes, setCulinaryTypes] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelection = (culinaryId: number) => {
    setSelectedOption(selectedOption === culinaryId ? null : culinaryId);
    onSelectionChange(selectedOption === culinaryId ? null : culinaryId);
  };

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

  return (
    <ScrollView style={styles.cookingContainer}>
      {culinaryTypes.map((culinary: any) => (
        <View key={culinary.id} style={styles.checkboxContainer}>
          <Checkbox
            value={selectedOption === culinary.id}
            onValueChange={() => handleSelection(culinary.id)}
            color={
              selectedOption === culinary.id ? "#E5383B" : undefined
            }
          />
          <Text style={styles.label}>{culinary.culinaria}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

