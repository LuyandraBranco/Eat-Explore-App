import { View, Text, Image, Dimensions } from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { CarouselItem } from "../../components/Carousel";
import { Category } from "../../components/Category";
import { Near } from "../../components/Near";
import { BestReviews } from "../../components/BestReviews";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Home({ navigation }: any) {
  const [name, setName] = useState<string | null>(null);
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
  return (
    <View style={styles.containerHome}>
      {/* <StatusBar backgroundColor="#000" /> */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTxt}>
            Olá, <Text style={styles.txt}>{name}</Text>
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
      <CarouselItem />
      <Category />
      <BestReviews />
      <Near />
    </View>
  );
}
