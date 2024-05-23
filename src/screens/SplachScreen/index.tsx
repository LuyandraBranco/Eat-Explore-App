import React, { useEffect } from "react";
import { View, Image, SafeAreaView } from "react-native";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function SplachScreen({ navigation }: any) {
  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const isFirstLaunch = await AsyncStorage.getItem("firstLaunch");
        if (isFirstLaunch === null) {
          // Primeira vez que o aplicativo é aberto
          await AsyncStorage.setItem("firstLaunch", "false");
          navigation.navigate("Onboarding");
        } else {
          // Verifica se o userId está presente no armazenamento local
          const userId = await AsyncStorage.getItem("userId");
          if (userId) {
            // userId encontrado, vá diretamente para a tela Home
            navigation.navigate("Tabs", { screen: "Home" });
          } else {
            // userId não encontrado, vá para a tela de autenticação
            navigation.navigate("AuthScreen");
          }
        }
      } catch (error) {
        console.error("Erro ao verificar o primeiro lançamento: ", error);
        // Em caso de erro, redirecionar para a tela de autenticação
        navigation.navigate("AuthScreen");
      }
    };

    const timer = setTimeout(() => {
      checkFirstLaunch();
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={[styles.containeSplach]}>
      <View style={[styles.imageContainer]}>
        <Image
          source={require("../../assets/images/logo.jpeg")}
          style={styles.imagem}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}
