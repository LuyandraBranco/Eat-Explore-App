import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { X } from "phosphor-react-native";
import { FilterElement } from "../FilterElement";
import { CookingFilter } from "../CookingFilter";
import { PriceFilter } from "../PriceFilter";
import { StarReviewsFilter } from "../StarReviewsFilter";
import { HourFilter } from "../HourFilter";
import { ReservationsFilter } from "../ReservationsFilter";
import { PromotionFilter } from "../PromotionsFilter";
import { EnvironmentFilter } from "../EnvironmentFilter";
import { LocationFilter } from "../LocationFilter";

export function FilterModal({ visible, onClose, onApply }: any) {
  const [expandedFilter, setExpandedFilter] = useState("");

  const [selectedCulinaryOptions, setSelectedCulinaryOptions] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(0);

  const handlePriceChange = (price: number) => {
    setSelectedPrice(price);
    console.log(selectedPrice)
  };

  const handleCulinarySelectionChange = (selectedOptions: any) => {
    setSelectedCulinaryOptions(selectedOptions);
    console.log(selectedCulinaryOptions);
  };

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
              <LocationFilter />
            </FilterElement>
            <FilterElement
              title="Tipo Culinária"
              expanded={expandedFilter === "Tipo Culinária"}
              onPress={() => toggleFilter("Tipo Culinária")}
            >
              <CookingFilter
                onSelectionChange={handleCulinarySelectionChange}
              />
            </FilterElement>
            <FilterElement
              title="Preço"
              expanded={expandedFilter === "Preço"}
              onPress={() => toggleFilter("Preço")}
            >
              <PriceFilter onPriceChange={handlePriceChange} />
            </FilterElement>
            <FilterElement title="Avaliação">
              <StarReviewsFilter onPress={() => {}} />
            </FilterElement>
            <FilterElement title="Horário de Funcionamento">
              <HourFilter />
            </FilterElement>
            <FilterElement title="Ambiente">
              <EnvironmentFilter />
            </FilterElement>
            <FilterElement title="Reservas">
              <ReservationsFilter />
            </FilterElement>
            <FilterElement title="Promoções">
              <PromotionFilter />
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
