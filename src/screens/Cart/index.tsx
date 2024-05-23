import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { CaretLeft } from "phosphor-react-native";

export function Cart({ navigation }: any) {
  return (
    <SafeAreaView style={styles.cartContainer}>
      <StatusBar style="light" backgroundColor="#101114" />
      {/* <View style={styles.header}>
        <Text style={styles.headerName}>Carrinho</Text>
      </View> */}
      <View style={styles.cartImage}>
        <Image
          source={require("../../assets/images/cart.png")}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.txtCart}>Brevemente na nossa plataforma</Text>
    </SafeAreaView>
  );
}
