import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { CaretLeft, Heart } from "phosphor-react-native";
import { NavRestaurant } from "../../components/NavRestaurant";
import { Near } from "../../components/Near";
import { Card } from "../../components/Card";
import { SafeAreaView } from "react-native-safe-area-context";

export function RestaurantMenu({ route, navigation }: any) {
  const { restaurantData } = route.params;
  return (
    <SafeAreaView style={styles.containerRestaurantMenu}>
      <StatusBar style="light" backgroundColor="#1E1E1E" />
      <View style={styles.containerRestaurantItem}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CaretLeft size={32} color="#000" style={styles.headerArrow} />
          </TouchableOpacity>
          <Text style={styles.restaurantName}>LOOKAL BEACH CLUB</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Heart size={32} color="#F55F5F" style={styles.headerHeart} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerImage}>
          <View style={styles.image}>
            <Image
              source={require("../../assets/images/lookal.png")}
              style={styles.img}
            />
          </View>
        </View>
        <NavRestaurant navigation={navigation}/>
      </View>
      <View style={styles.containerItems}>
       <Card/>
      </View>
    </SafeAreaView>
  );
}
