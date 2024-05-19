import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import * as Location from "expo-location";
import styles from "./styles";

export function LocationFilter() {
  const [location, setLocation] = useState(null);
  const [manualLocation, setManualLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permissão para acessar a localização foi negada");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtro de Localização:</Text>
      {location ? (
        <Text>
          Localização Atual: Latitude {location.coords.latitude}, Longitude{" "}
          {location.coords.longitude}
        </Text>
      ) : (
        <Text>{errorMsg}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Insira uma localização manualmente"
        value={manualLocation}
        onChangeText={setManualLocation}
      />
      <Button
        title="Usar Localização Manual"
        onPress={() => console.log(manualLocation)}
      />
    </View>
  );
}
