import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { X } from "phosphor-react-native";
import { FilterElement } from "../FilterElement";
import { CookingFilter } from "../CookingFilter";
import { PriceFilter } from "../PriceFilter";
import { StarReviewsFilter } from "../StarReviewsFilter";
import { HourFilter } from "../HourFilter";

export function FilterModal({ visible, onClose, onApply }: any) {
  const [expandedFilter, setExpandedFilter] = useState("");

  const toggleFilter = (filterName: string) => {
    if (expandedFilter === filterName) {
      setExpandedFilter("");
    } else {
      setExpandedFilter(filterName);
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      // onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        // onPressOut={onClose}
      >
        <View style={styles.modalContent}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onClose}>
              <X size={24} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.modalTitle}>Selecione seus filtros:</Text>
            <FilterElement
              title="Localização"
              expanded={expandedFilter === "Localização"}
              onPress={() => toggleFilter("Localização")}
            >
              <Text>Italiana</Text>
              <Text>Japonesa</Text>
              <Text>Mexicana</Text>
              <Text>Vegetariana</Text>
            </FilterElement>
            <FilterElement
              title="Tipo Culinária"
              expanded={expandedFilter === "Tipo Culinária"}
              onPress={() => toggleFilter("Tipo Culinária")}
            >
              <CookingFilter />
            </FilterElement>
            <FilterElement
              title="Preço"
              expanded={expandedFilter === "Preço"}
              onPress={() => toggleFilter("Preço")}
            >
              <PriceFilter />
            </FilterElement>
            <FilterElement title="Avaliação">
              <StarReviewsFilter/>
            </FilterElement>
            <FilterElement title="Horário de Funcionamento">
              <HourFilter/>
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
