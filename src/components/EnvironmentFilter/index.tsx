import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";

export function EnvironmentFilter() {
  const [selectedEnvironment, setSelectedEnvironment] = useState("romântico");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o Ambiente:</Text>
      <Picker
        selectedValue={selectedEnvironment}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedEnvironment(itemValue)
        }
      >
        <Picker.Item label="Romântico" value="romântico" />
        <Picker.Item label="Familiar" value="familiar" />
        <Picker.Item label="Casual" value="casual" />
        <Picker.Item label="Elegante" value="elegante" />
        {/* Adicione mais opções conforme necessário */}
      </Picker>
    </View>
  );
}
