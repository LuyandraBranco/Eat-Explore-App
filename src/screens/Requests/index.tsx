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

export function Requests({ navigation }: any) {
  return (
    <SafeAreaView style={styles.requestContainer}>
      <StatusBar style="light" backgroundColor="#101114" />
      {/* <View style={styles.header}>
        <Text style={styles.headerName}>Carrinho</Text>
      </View> */}
      <View style={styles.requestImage}>
        <Image
          source={require("../../assets/images/request.png")}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.txtRequest}>Brevemente na nossa plataforma</Text>
    </SafeAreaView>
  );
}
