import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { X } from "phosphor-react-native";
import { FilterElement } from "../FilterElement";

export function FilterModal({ visible, onClose, onApply }: any) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        onPressOut={onClose}
      >
        <View style={styles.modalContent}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onClose}>
              <X size={24} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.modalTitle}>Selecione seus filtros:</Text>
            <FilterElement title="Localização">
              <Text>Italiana</Text>
              <Text>Japonesa</Text>
              <Text>Mexicana</Text>
              <Text>Vegetariana</Text>
              {/* Continue para outras opções */}
            </FilterElement>
            <FilterElement title="Tipo Culinária">
              <Text>Italiana</Text>
              <Text>Japonesa</Text>
              <Text>Mexicana</Text>
              <Text>Vegetariana</Text>
              {/* Continue para outras opções */}
            </FilterElement>
            <FilterElement title="Preço">
              <Text>Italiana</Text>
              <Text>Japonesa</Text>
              <Text>Mexicana</Text>
              <Text>Vegetariana</Text>
              {/* Continue para outras opções */}
            </FilterElement>
            <FilterElement title="Avaliação">
              <Text>Italiana</Text>
              <Text>Japonesa</Text>
              <Text>Mexicana</Text>
              <Text>Vegetariana</Text>
              {/* Continue para outras opções */}
            </FilterElement>
            <FilterElement title="Horário de Funcionamento">
              <Text>Italiana</Text>
              <Text>Japonesa</Text>
              <Text>Mexicana</Text>
              <Text>Vegetariana</Text>
              {/* Continue para outras opções */}
            </FilterElement>
            <FilterElement title="Ambiente">
              <Text>Italiana</Text>
              <Text>Japonesa</Text>
              <Text>Mexicana</Text>
              <Text>Vegetariana</Text>
            </FilterElement>

            <FilterElement title="Reservas">
              <Text>Italiana</Text>
              <Text>Japonesa</Text>
              <Text>Mexicana</Text>
              <Text>Vegetariana</Text>
            </FilterElement>
            <FilterElement title="Promoções">
              <Text>Italiana</Text>
              <Text>Japonesa</Text>
              <Text>Mexicana</Text>
              <Text>Vegetariana</Text>
            </FilterElement>
          </ScrollView>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.txtButton}>Aplicar Filtros</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
