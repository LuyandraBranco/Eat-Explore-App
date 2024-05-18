import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { MagnifyingGlass, Faders } from "phosphor-react-native";
import styles from "./styles";

export function SearchInput({
  searchTerm,
  setSearchTerm,
  isEditing,
  setEditing,
  handleCancel,
  toggleFilterModal,
}: any) {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
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
          <TouchableOpacity
            onPress={toggleFilterModal}
            style={styles.filterIcon}
          >
            <Faders size={20} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
