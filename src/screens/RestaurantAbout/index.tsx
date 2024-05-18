import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { CaretLeft, Heart } from "phosphor-react-native";
import { NavRestaurant } from "../../components/NavRestaurant";
import { SafeAreaView } from "react-native-safe-area-context";

export function RestaurantAbout({ route, navigation }: any) {
  const { restaurantData } = route.params;
  return (
    <SafeAreaView style={styles.containerRestaurantAbout}>
      <View style={styles.containerRestaurantItem}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CaretLeft size={32} color="#000" style={styles.headerArrow} />
          </TouchableOpacity>
          <Text style={styles.restaurantName}>{restaurantData.name}</Text>
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
        <NavRestaurant navigation={navigation} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>Horário de Atendimento</Text>
        <Text style={styles.restaurantDescription}>
          De Segunda à Segunda, das {restaurantData.horaAbertura} até às{" "}
          {restaurantData.horaFechamento}
        </Text>
        <Text style={styles.title}>Contactos</Text>
        <Text style={styles.restaurantDescription}>
          {restaurantData.phone1}
        </Text>
        <Text style={styles.title}>Localização</Text>
        <Text style={styles.restaurantDescription}>
          {restaurantData.address}
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
    </SafeAreaView>
  );
}
