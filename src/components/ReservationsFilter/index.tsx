import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";

export function ReservationsFilter() {
  const [availability, setAvailability] = useState("disponível");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Disponibilidade para Reservas:</Text>
      <Picker
        selectedValue={availability}
        onValueChange={(itemValue, itemIndex) => setAvailability(itemValue)}
      >
        <Picker.Item label="Disponível" value="disponível" />
        <Picker.Item label="Lotado" value="lotado" />
        <Picker.Item label="Fechado" value="fechado" />
      </Picker>
    </View>
  );
}
