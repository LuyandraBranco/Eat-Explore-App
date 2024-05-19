import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  BackHandler,
  ToastAndroid,
} from "react-native";
import styles from "./styles";
import { CarouselItem } from "../../components/Carousel";
import { Category } from "../../components/Category";
import { Near } from "../../components/Near";
import { BestReviews } from "../../components/BestReviews";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home({ navigation }: any) {
  const [name, setName] = useState<string | null>(null);
  const [backPressedOnce, setBackPressedOnce] = useState(false);

  useEffect(() => {
    const retrieveUserData = async () => {
      try {
        const username = await AsyncStorage.getItem("username");
        setName(username);
      } catch (error) {
        console.error("Erro ao recuperar dados do AsyncStorage:", error);
      }
    };

    retrieveUserData();
  }, []);

  const handleBackPress = useCallback(() => {
    if (backPressedOnce) {
      BackHandler.exitApp();
      return true;
    }

    setBackPressedOnce(true);
    ToastAndroid.show("Pressione novamente para sair", ToastAndroid.SHORT);

    setTimeout(() => {
      setBackPressedOnce(false);
    }, 2000);

    return true;
  }, [backPressedOnce]);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, [handleBackPress]);

  return (
    <SafeAreaView style={styles.containerHome}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTxt}>
            Olá <Text style={styles.txt}>{name}</Text>
          </Text>
          <Text style={styles.headerDescription}>
            O que está procurando hoje?
          </Text>
        </View>
        <TouchableOpacity
          style={styles.containerImage}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={require("../../assets/images/avatar.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <CarouselItem />
        <Category />
        <BestReviews />
        <Near />
      </ScrollView>
    </SafeAreaView>
  );
}
