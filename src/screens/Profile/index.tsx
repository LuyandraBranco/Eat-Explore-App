import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import {
  CaretLeft,
  CaretRight,
  Globe,
  Heart,
  Moon,
  SignOut,
} from "phosphor-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export function Profile({ navigation }: any) {
  const [email, setEmail] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const retrieveUserData = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem("email");
        const storedUsername = await AsyncStorage.getItem("username");
        const storedUserId = await AsyncStorage.getItem("userId");

        setEmail(storedEmail);
        setUsername(storedUsername);
        setUserId(storedUserId);
      } catch (error) {
        console.error("Erro ao recuperar dados do AsyncStorage:", error);
      }
    };

    retrieveUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("email");
      await AsyncStorage.removeItem("username");
      await AsyncStorage.removeItem("userId");

      navigation.navigate("AuthScreen");
    } catch (error) {
      console.error("Erro ao limpar dados do AsyncStorage:", error);
    }
  };

  return (
    <SafeAreaView style={styles.containerProfile}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CaretLeft size={32} color="#000" style={styles.headerArrow} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerItem}>
        <Image
          style={styles.img}
          source={require("../../assets/images/avatar.png")}
        />
        <Text style={styles.heading}>{username}</Text>
        <Text style={styles.info}>{email}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.label}>Editar Perfil</Text>
          <CaretRight size={22} color="#fff" />
        </TouchableOpacity>
        <View style={styles.containerContent}>
          <Text style={styles.title}>Content e Preferências</Text>
          <TouchableOpacity style={styles.itemContent}>
            <View style={styles.textContent}>
              <Globe size={32} color="#000" />
              <Text style={styles.text}> Língua</Text>
            </View>
            <CaretRight size={32} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContent}>
            <View style={styles.textContent}>
              <Moon size={32} color="#000" />
              <Text style={styles.text}> DarkMode</Text>
            </View>
            <CaretRight size={32} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContent} onPress={handleLogout}>
            <View style={styles.textContent}>
              <SignOut size={32} color="#000" />
              <Text style={styles.text}> Sair</Text>
            </View>
            <CaretRight size={32} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
