import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { MagnifyingGlass, Faders } from "phosphor-react-native";
import styles from "./styles";

export function SearchComponent({ navigation }: any) {
  const [isEditing, setEditing] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleCancel = () => {
    setEditing(false);
    setSearchText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onFocus={() => setEditing(true)}
        onBlur={() => setEditing(false)}
      />
      <View style={styles.iconContainer}>
        <MagnifyingGlass size={20} color="black" />
      </View>
      {isEditing && (
        <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      )}
      {!isEditing && (
        <View style={styles.filterIcon}>
          <Faders size={20} color="black" />
        </View>
      )}
    </View>
  );
}
