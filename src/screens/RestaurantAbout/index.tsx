import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import { CaretLeft, Heart } from "phosphor-react-native";
import { NavRestaurant } from "../../components/NavRestaurant";
import MapView from "react-native-maps";

export function RestaurantAbout({ route, navigation }: any) {
  const { restaurantData } = route.params;
  return (
    <SafeAreaView style={styles.containerRestaurantAbout}>
      <View style={styles.containerRestaurantItem}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CaretLeft size={24} color="#000" style={styles.headerArrow} />
          </TouchableOpacity>
          <Text style={styles.restaurantName}>{restaurantData.name}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Heart size={25} color="#F55F5F" style={styles.headerHeart} />
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
        <View style={styles.containerMap}>
          <View style={styles.mapContainer}>
            <MapView style={styles.map} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
