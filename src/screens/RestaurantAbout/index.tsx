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
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import axios from "axios";
import { Restaurant } from "../../@types/Restaurant";

export function RestaurantAbout({ route, navigation }: any) {
  const [activeItem, setActiveItem] = useState("about");
  const [restaurantData, setRestaurantData] = useState<Restaurant | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const { id } = route.params;
  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await axios.get(
          `https://api-eatexplore.onrender.com/restaurante/${id}`
        );
        const { data } = response;
        setRestaurantData(data);

        // Extraindo latitude e longitude da URL do Google Maps
        const [, lat, lon] =
          data.maps.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/) || [];
        setLatitude(parseFloat(lat));
        setLongitude(parseFloat(lon));
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchRestaurantData();
  }, [id]);

  if (!restaurantData) {
    return (
      <SafeAreaView style={styles.containerRestaurantAbout}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.containerRestaurantAbout}>
      <View style={styles.containerRestaurantItem}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CaretLeft size={24} color="#000" style={styles.headerArrow} />
          </TouchableOpacity>
          <Text style={styles.restaurantName}>{restaurantData.name}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Heart size={25} color="#F55F5F" />
          </TouchableOpacity>
        </View>
        <View style={styles.containerImage}>
          <View style={styles.image}>
            <Image source={{ uri: restaurantData.photo }} style={styles.img} />
          </View>
        </View>
        <NavRestaurant
          navigation={navigation}
          restaurantData={restaurantData}
          activeItem={activeItem}
        />
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
            {latitude !== null && longitude !== null && (
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude,
                  longitude,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}
              >
                <Marker coordinate={{ latitude, longitude }} />
              </MapView>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
