import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Checkbox from "expo-checkbox";
import styles from "./styles";
import { optionsCookingFilter } from "../../data/optionsCookingFilter";

interface SelectedOptions {
  [key: string]: boolean;
}

export function CookingFilter() {
  const [isSelected, setSelection] = useState<SelectedOptions>(
    optionsCookingFilter.reduce((acc, option) => {
      acc[option.key] = false;
      return acc;
    }, {} as SelectedOptions)
  );

  const handleSelection = (optionKey: string) => {
    setSelection((prevState) => ({
      ...prevState,
      [optionKey]: !prevState[optionKey],
    }));
  };

  return (
    <ScrollView style={styles.cookingContainer}>
      {optionsCookingFilter.map(({ key, label }) => (
        <View key={key} style={styles.checkboxContainer}>
          <Checkbox
            value={isSelected[key]}
            onValueChange={() => handleSelection(key)}
            color={isSelected[key] ? "#E5383B" : undefined}
          />
          <Text style={styles.label}>{label}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
