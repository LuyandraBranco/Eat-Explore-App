import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import styles from "./styles";

interface ButtonTypeProps {
  name: string;
  selectedGenre: string;
  onGenreSelect: (genre: string) => void;
}
export function ButtonTypeCategory({ name, selectedGenre, onGenreSelect }: ButtonTypeProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TouchableOpacity
    style={[styles.button, selectedGenre === name && styles.focused]}
    onPress={() => onGenreSelect(name)}
  >
    <Text style={styles.text}>{name}</Text>
  </TouchableOpacity>
  );
}