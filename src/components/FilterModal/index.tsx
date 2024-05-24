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
import axios from "axios";
import {
  FoodResult,
  RestaurantResult,
  SearchResult,
} from "../../screens/Search";

export function FilterModal({ visible, onClose, onApply }: any) {
  const [expandedFilter, setExpandedFilter] = useState("");

  const [selectedCulinaryOption, setSelectedCulinaryOption] = useState<
    number | null
  >(null);
  const [selectedPrice, setSelectedPrice] = useState(0);

  const handlePriceChange = (price: number) => {
    setSelectedPrice(price);
    console.log(selectedPrice);
  };

  const handleCulinarySelectionChange = (selectedOption: number | null) => {
    setSelectedCulinaryOption(selectedOption);
    console.log(selectedCulinaryOption);
  };

  const toggleFilter = (filterName: string) => {
    if (expandedFilter === filterName) {
      setExpandedFilter("");
    } else {
      setExpandedFilter(filterName);
    }
  };

  const applyFilters = async (): Promise<void> => {
    try {
      let combinedResults: SearchResult[] = [];
      // Verifica se há uma opção de culinária selecionada
      if (selectedCulinaryOption !== null) {
        // Faz a chamada de API para buscar restaurantes pelo tipo de culinária
        const culinaryResult = await axios.get<RestaurantResult[]>(
          `https://api-eatexplore.onrender.com/restaurante/culinaria/${selectedCulinaryOption}`
        );
        // Adiciona o campo 'type' aos resultados de culinária
        const culinaryDataWithTypes: RestaurantResult[] =
          culinaryResult.data.map((item) => ({
            ...item,
            type: "restaurant",
          }));
        combinedResults = [...combinedResults, ...culinaryDataWithTypes];
      }
      // Verifica se um preço foi selecionado
      if (selectedPrice > 0) {
        // Faz a chamada de API para buscar cardápios pelo preço
        const priceResult = await axios.get<FoodResult[]>(
          `https://api-eatexplore.onrender.com/cardapio/preco/${selectedPrice}`
        );
        // Adiciona o campo 'type' aos resultados de preço
        const priceDataWithTypes: FoodResult[] = priceResult.data.map(
          (item) => ({
            ...item,
            type: "food",
          })
        );
        combinedResults = [...combinedResults, ...priceDataWithTypes];
      }
      // Atualiza o estado com os resultados combinados
      onApply(combinedResults);
      // Fecha a modal
      onClose();
    } catch (error) {
      console.error("Erro ao aplicar filtros:", error);
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
          <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
            <Text style={styles.txtButton}>Aplicar Filtros</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
