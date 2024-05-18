import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";
import { ButtonTypeCategory } from "../ButtonTypeCategory";
import { CardFood } from "../CardFood";
import { Food } from "../../@types/Food";
import foodItems from "../../data/foodItems";
import { categoryFoodNames } from "../../data/categoryFoodNames";

export function Category({ navigation }: any) {
  const [selectedGenre, setSelectedGenre] = useState("Popular");

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
  };

  // Filtra as comidas com base no gênero selecionado
  const filteredFood = foodItems.filter((food) => food.genre === selectedGenre);
  console.log(filteredFood);

  return (
    <View style={styles.containerCategory}>
      <Text style={styles.title}>Categorias</Text>
      <View style={styles.containerButtons}>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {categoryFoodNames.map((name, index) => (
            <ButtonTypeCategory
              key={index}
              name={name}
              selectedGenre={selectedGenre}
              onGenreSelect={handleGenreSelect}
            />
          ))}
        </ScrollView>
      </View>
      <ScrollView
        contentContainerStyle={styles.cards}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {filteredFood.map((food: Food) => (
          <CardFood
            key={food.title}
            image={food.image}
            foodName={food.title}
            onPress={() =>
              navigation.navigate("Food", {
                foodData: food,
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}
