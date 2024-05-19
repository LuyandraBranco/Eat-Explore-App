import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import styles from "./styles";
import { CaretLeft } from "phosphor-react-native";
import { StatusBar } from "expo-status-bar";
import onboardingData from "../../data/onboardingData";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Onboarding({ navigation }: any) {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = async () => {
    if (currentScreen < onboardingData.length - 1) {
      setCurrentScreen((prevScreen) => prevScreen + 1);
    } else {
      // Navegar para a próxima tela após a última etapa
      await AsyncStorage.setItem("firstLaunch", "false");
      navigation.navigate("AuthScreen");
    }
  };

  const handleBack = () => {
    if (currentScreen > 0) {
      setCurrentScreen((prevScreen) => prevScreen - 1);
    }
  };

  return (
    <SafeAreaView style={styles.containerOnboarding}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <CaretLeft size={28} color="#fff" style={styles.txt} />
        </TouchableOpacity>
        <Text
          style={styles.headerTxt}
          onPress={async () => {
            await AsyncStorage.setItem("firstLaunch", "false");
            navigation.navigate("AuthScreen");
          }}
        >
          Skip
        </Text>
      </View>
      <View style={[styles.itemsContainer]}>
        <View style={styles.imageContainer}>
          <Image
            source={onboardingData[currentScreen].image}
            style={styles.imagem}
            resizeMode="contain"
          />
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>
            {onboardingData[currentScreen].title}
          </Text>
        </View>
        <View style={styles.containerDescription}>
          <Text style={styles.description}>
            {onboardingData[currentScreen].description}
          </Text>
        </View>
        <TouchableOpacity style={[styles.button]} onPress={handleNext}>
          <Text style={styles.txtButton}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
