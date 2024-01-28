import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { CaretLeft, Heart } from "phosphor-react-native";
import { Menu } from "../../components/Menu";
import { NavRestaurant } from "../../components/NavRestaurant";

export function RestaurantAbout({ navigation }: any) {
  return (
    <View style={styles.containerRestaurantAbout}>
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
        <NavRestaurant/>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>Horário de Atendimento</Text>
        <Text style={styles.restaurantDescription}>
          De Segunda à Segundas, das 7:00 até às 23:00
        </Text>
        <Text style={styles.title}>Contactos</Text>
        <Text style={styles.restaurantDescription}>9234930353</Text>
        <Text style={styles.title}>Localização</Text>
        <Text style={styles.restaurantDescription}>
          Angola, Luanda, Ilha de Luanda
        </Text>
        <View style={styles.containerImage}>
          <View style={styles.image}>
            <Image
              source={require("../../assets/images/map.png")}
              style={styles.img}
            />
          </View>
        </View>
      </View>
      <Menu />
    </View>
  );
}
