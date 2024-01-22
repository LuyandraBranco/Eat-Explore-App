import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

export function AuthScreen({ navigation }: any) {
  return (
    <View style={styles.containerAuth}>
      <StatusBar style="light" backgroundColor="#101114" />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/screen.png")}
          style={styles.imagem}
          resizeMode="contain"
        />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Divirta-se</Text>
      </View>

      <View style={styles.containerDescription}>
        <Text style={styles.description}>
          Entre e explore gastronomias encontradas em Angola
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('SignUp')}>
        <Text style={styles.txtButton}>Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonLogin} onPress={()=>navigation.navigate('SignIn')}>
        <Text style={styles.txtButton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
