import { CaretDown } from "phosphor-react-native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function FilterElement({ title, children }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.filterLocationContainer}>
      <View style={styles.filterHeader}>
        <Text style={styles.filterTitle}>{title}</Text>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <CaretDown size={24} />
        </TouchableOpacity>
      </View>
      {expanded && (
        <View style={styles.filterOptionsContainer}>{children}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  filterLocationContainer: {
    marginBottom: 10,
  },
  filterHeader: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  filterOptionsContainer: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
