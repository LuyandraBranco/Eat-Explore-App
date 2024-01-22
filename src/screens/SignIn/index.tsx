import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { CaretLeft, TextT, Vault, X } from "phosphor-react-native";

export function SignIn({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.containerLogin}>
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

          <Text style={styles.txtAccount}>Esqueci minha senha</Text>

          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Home")}
            >
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
      <Text style={styles.txtN} onPress={()=>navigation.navigate('SignUp')}>
        Novo no Eat Explore? <Text style={styles.txtBold}> Crie uma conta</Text>
      </Text>
    </View>
  );
}
