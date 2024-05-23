import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import { useState } from "react";
import { CaretLeft } from "phosphor-react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function SignIn({ navigation }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async () => {
    try {
      const loginResponse = await axios.post(
        "https://api-eatexplore.onrender.com/user/login",
        {
          username,
          password,
        }
      );

      if (loginResponse.data.accessToken) {
        await AsyncStorage.setItem("userId", loginResponse.data.user.userId);
        await AsyncStorage.setItem(
          "username",
          loginResponse.data.user.username
        );
        await AsyncStorage.setItem("email", loginResponse.data.user.email);
        await AsyncStorage.setItem(
          "dataCadastro",
          loginResponse.data.user.dataCadastro
        );
        await AsyncStorage.setItem("photo", loginResponse.data.user.photo);
        await AsyncStorage.setItem("capa", loginResponse.data.user.capa);
        await AsyncStorage.setItem(
          "accessToken",
          loginResponse.data.accessToken
        );
        navigation.navigate("Tabs", { screen: "Home" });
      } else {
        console.error("Token de acesso não recebido após autenticação");
      }
    } catch (error) {
      console.error("Erro durante a autenticação:", error);
    }
  };
  return (
    <SafeAreaView style={styles.containerLogin}>
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
            <Text style={styles.txtInput}>Nome do usuário</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome de Usuário"
              autoCapitalize="none"
              value={username}
              onChangeText={(text) => setUsername(text)}
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
          <Text style={styles.txtAccount}>Esqueci minha senha</Text>
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
              <Text style={styles.txtButton}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.txt}>Ou entre com</Text>
        <View style={styles.socialbutton}>
          <View style={styles.google}>
            <Text style={styles.socialTxt}>Google</Text>
          </View>
          <View style={styles.apple}>
            <Text style={styles.socialTxt}>Apple</Text>
          </View>
        </View>
      </View>
      <Text style={styles.txtN} onPress={() => navigation.navigate("SignUp")}>
        Novo no Eat Explore? <Text style={styles.txtBold}> Crie uma conta</Text>
      </Text>
    </SafeAreaView>
  );
}
