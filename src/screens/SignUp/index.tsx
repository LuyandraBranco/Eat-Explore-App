import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { CaretLeft, TextT, Vault, X } from "phosphor-react-native";
import axios from "axios";
import NetInfo from "@react-native-community/netinfo";

export function SignUp({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isConnected, setIsConnected] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
    });

    // Cleanup
    return () => unsubscribe();
  }, []);
  const handleSignUp = async () => {
    if (!isConnected) {
      console.error("Sem conexão com a internet");
      return;
    }

    try {
      // Fazer a requisição para cadastrar o usuário
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

      // // Se o cadastro for bem-sucedido, fazer o login
      // const loginResponse = await axios.post(
      //   "http://192.168.1.134/user/login",
      //   {
      //     email: email,
      //     password,
      //   }
      // );
      // console.log("Login realizado com sucesso:", loginResponse.data);

      // Armazenar o token de acesso ou usuário no estado global ou AsyncStorage
      // Redirecionar para a próxima tela
      navigation.navigate("SignIn");
    } catch (error) {
      console.error("Erro durante o cadastro ou login:", error);
    }
  };
  return (
    <View style={styles.containerUp}>
      <StatusBar style="light" backgroundColor="#1E1E1E" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CaretLeft size={32} color="#fff" style={styles.headerArrow} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerItems}>
        <Text style={styles.title}>Eat Explore</Text>
        <View style={styles.containerDescription}>
          <Text style={styles.description}>
            Saboreie a Experiência: Exploradores de Sabores. Saboreie.
            Compartilhe.
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
              onChangeText={(text) => setName(text)}
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

          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.txtButton}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.txtN} onPress={() => navigation.navigate("SignIn")}>
        Já possuí uma conta? <Text style={styles.txtBold}> Faça Login</Text>
      </Text>
    </View>
  );
}
