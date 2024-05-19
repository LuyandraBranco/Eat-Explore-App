import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  BackHandler,
  ToastAndroid,
} from "react-native";
import Checkbox from "expo-checkbox";
import styles from "./styles";
import { CaretLeft } from "phosphor-react-native";
import axios from "axios";
import NetInfo from "@react-native-community/netinfo";
import { TermModal } from "../../components/TermModal";

export function SignUp({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      console.error("Sem conexão com a internet");
      return;
    }

    if (!isTermsAccepted) {
      console.error("Você deve aceitar os termos e condições");
      ToastAndroid.show(
        "Você deve aceitar os termos e condições",
        ToastAndroid.SHORT
      );
      return;
    }

    try {
      const response = await axios.post("http://192.168.1.134:3000/user", {
        username: `${firstName} ${lastName}`,
        password,
        dateBirth: null,
        address: null,
        email,
        imageUrl: null,
        phone1: null,
        phone2: null,
        localizacao: null,
        firstName,
        lastName,
      });
      console.log("Cadastro realizado com sucesso:", response.data);
      navigation.navigate("SignIn");
    } catch (error) {
      console.error("Erro durante o cadastro ou login:", error);
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
            <Text style={styles.txtInput}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              autoCapitalize="none"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.txtInput}>Sobrenome</Text>
            <TextInput
              style={styles.input}
              placeholder="Sobrenome"
              autoCapitalize="none"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
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
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isTermsAccepted}
              onValueChange={setIsTermsAccepted}
              color={isTermsAccepted ? "#E5383B" : undefined}
            />
            <Text style={styles.label}>Aceito os</Text>
            <TouchableOpacity onPress={toggleTermModal}>
              <Text style={styles.color}> {""}Termos e Condições</Text>
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
        Já possuí uma conta? <Text style={styles.txtBold}>Faça Login</Text>
      </Text>
      <TermModal visible={isTermVisible} onClose={toggleTermModal} />
    </SafeAreaView>
  );
}
