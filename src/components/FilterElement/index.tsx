import { CaretDown } from "phosphor-react-native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./styles";

export function FilterElement({ title, children }: any) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.filterLocationContainer}>
      <TouchableOpacity onPress={toggleExpand} style={styles.filterHeader}>
        <Text style={styles.filterTitle}>{title}</Text>
        <TouchableOpacity onPress={toggleExpand}>
          <CaretDown size={24} />
        </TouchableOpacity>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.filterOptionsContainer}>{children}</View>
      )}
    </View>
  );
}
