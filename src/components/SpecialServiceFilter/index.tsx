import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";

export function SpecialServicesFilter() {
  const [selectedService, setSelectedService] = useState("entrega");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o Serviço:</Text>
      <Picker
        selectedValue={selectedService}
        onValueChange={(itemValue, itemIndex) => setSelectedService(itemValue)}
      >
        <Picker.Item label="Entrega" value="entrega" />
        <Picker.Item label="Take-Away" value="takeAway" />
        <Picker.Item label="Mesas ao Ar Livre" value="outdoorSeating" />
        <Picker.Item
          label="Opções Vegetarianas/Veganas"
          value="vegetarianVeganOptions"
        />
        <Picker.Item label="Opções Sem Glúten" value="glutenFreeOptions" />
      </Picker>
    </View>
  );
}
