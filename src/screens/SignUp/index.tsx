import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ToastAndroid,
} from "react-native";
import Checkbox from "expo-checkbox";
import styles from "./styles";
import { CaretLeft } from "phosphor-react-native";
import axios from "axios";
import NetInfo from "@react-native-community/netinfo";
import { TermModal } from "../../components/TermModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function SignUp({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const photo =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fuser-icon&psig=AOvVaw2YO2PV-Xjc-yXvp0wieAMu&ust=1716588567889000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOju8vTkpIYDFQAAAAAdAAAAABAY";
  const capa =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fuser-icon&psig=AOvVaw2YO2PV-Xjc-yXvp0wieAMu&ust=1716588567889000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOju8vTkpIYDFQAAAAAdAAAAABAY";
  const [isConnected, setIsConnected] = useState(true);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isTermVisible, setTermVisible] = useState(false);

  const toggleTermModal = () => {
    setTermVisible(!isTermVisible);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  const handleSignUp = async () => {
    if (!isConnected) {
      ToastAndroid.show("Sem conexão com a internet", ToastAndroid.SHORT);
      return;
    }

    if (!isTermsAccepted) {
      ToastAndroid.show(
        "Você deve aceitar os termos e condições",
        ToastAndroid.SHORT
      );
      return;
    }

    try {
      const response = await axios.post(
        "https://api-eatexplore.onrender.com/user",
        {
          username,
          email,
          password,
          photo,
          capa,
        }
      );
      console.log("Cadastro realizado com sucesso:", response.data);

      // Login automático após cadastro
      try {
        const loginResponse = await axios.post(
          "https://api-eatexplore.onrender.com/user/login",
          {
            username,
            password,
          }
        );
        console.log("Login realizado com sucesso:", loginResponse.data);
        await AsyncStorage.setItem(
          "user",
          JSON.stringify(loginResponse.data.user)
        );
        await AsyncStorage.setItem(
          "accessToken",
          loginResponse.data.accessToken
        );

        navigation.navigate("Tabs", { screen: "Home" });
      } catch (loginError) {
        console.error("Erro durante o login:", loginError);
        ToastAndroid.show("Erro durante o login", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error("Erro durante o cadastro:", error);
      ToastAndroid.show("Erro durante o cadastro", ToastAndroid.SHORT);
    }
  };

  return (
    <SafeAreaView style={styles.containerUp}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CaretLeft size={24} color="#fff" style={styles.headerArrow} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerItems}>
        <Text style={styles.title}>Eat Explore</Text>
        <View style={styles.containerDescription}>
          <Text style={styles.description}>
            Descubra e Deguste: Uma Jornada de Sabores. Saboreie. Compartilhe.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.txtInput}>Nome de Usuário</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome de Usuário"
              autoCapitalize="none"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.txtInput}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <Text style={styles.txtInput}>Senha</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Senha"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.eyeIcon}
            >
              <Text>{showPassword ? "👁️" : "👁️‍🗨️"}</Text>
            </TouchableOpacity>
          </View>

          {/* <View style={styles.formGroup}>
            <Text style={styles.txtInput}>URL da Foto</Text>
            <TextInput
              style={styles.input}
              placeholder="URL da Foto"
              autoCapitalize="none"
              value={photo}
              onChangeText={(text) => setPhoto(text)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.txtInput}>URL da Capa</Text>
            <TextInput
              style={styles.input}
              placeholder="URL da Capa"
              autoCapitalize="none"
              value={capa}
              onChangeText={(text) => setCapa(text)}
            />
          </View> */}

          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isTermsAccepted}
              onValueChange={setIsTermsAccepted}
              color={isTermsAccepted ? "#E5383B" : undefined}
            />
            <Text style={styles.label}>Aceito os</Text>
            <TouchableOpacity onPress={toggleTermModal}>
              <Text style={styles.color}> Termos e Condições</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.txtButton}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.txtN} onPress={() => navigation.navigate("SignIn")}>
        Já possui uma conta? <Text style={styles.txtBold}>Faça Login</Text>
      </Text>

      <TermModal visible={isTermVisible} onClose={toggleTermModal} />
    </SafeAreaView>
  );
}
