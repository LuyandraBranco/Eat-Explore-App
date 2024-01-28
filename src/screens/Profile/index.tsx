import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import styles from "./styles";
import {
  CaretLeft,
  CaretRight,
  Globe,
  Heart,
  Moon,
  SignOut,
} from "phosphor-react-native";
import { Menu } from "../../components/Menu";

export function Profile({ navigation }: any) {
  return (
    <View style={styles.containerProfile}>
      <StatusBar style="light" backgroundColor="#1E1E1E" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CaretLeft size={32} color="#000" style={styles.headerArrow} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerItem}>
        <Image
          style={styles.img}
          source={require("../../assets/images/image3.png")}
        />
        <Text style={styles.heading}>Luyandra Branco</Text>

        <Text style={styles.info}>luyandrabranco@gmail.com</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.label}>Editar Perfil</Text>
          <CaretRight size={22} color="#fff" />
        </TouchableOpacity>
        <View style={styles.containerContent}>
          <Text style={styles.title}>Content e Preferências</Text>
          <TouchableOpacity style={styles.itemContent}>
            <View style={styles.textContent}>
              <Heart size={32} color="#000" />
              <Text style={styles.text}> Favoritos</Text>
            </View>
            <CaretRight size={32} color="#000" />
          </TouchableOpacity>
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
          <TouchableOpacity style={styles.itemContent}>
            <View style={styles.textContent}>
              <SignOut size={32} color="#000" />
              <Text style={styles.text}> Sair</Text>
            </View>
            <CaretRight size={32} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <Menu />
    </View>
  );
}
