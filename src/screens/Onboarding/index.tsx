import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { CaretLeft } from "phosphor-react-native";
import { StatusBar } from "expo-status-bar";
import onboardingData from "../../data/onboardingData";
import { SafeAreaView } from "react-native-safe-area-context";

export function Onboarding({ navigation }: any) {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    if (currentScreen < onboardingData.length - 1) {
      setCurrentScreen((prevScreen) => prevScreen + 1);
    } else {
      // Navegar para a próxima tela após a última etapa
      navigation.navigate("AuthScreen");
    }
  };

  const handleBack = () => {
    if (currentScreen > 0) {
      setCurrentScreen((prevScreen) => prevScreen - 1);
    }
  };

  return (
    <SafeAreaView style={[styles.containerOnboarding]}>
      <StatusBar style="light" backgroundColor="#1E1E1E" />
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <CaretLeft size={28} color="#fff" style={styles.headerArrow} />
        </TouchableOpacity>
        <Text
          style={styles.headerTxt}
          onPress={() => navigation.navigate("AuthScreen")}
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
