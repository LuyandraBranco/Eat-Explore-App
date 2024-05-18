import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface CardStationProps {
  image: string;
  stationName: string;
  onPress: () => void; 
}

export function CardCategory({ image, stationName, onPress }: CardStationProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <ImageBackground
        source={{uri:image}}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{stationName}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "flex-end",
  },
  card: {
    width: "48%",
    height: 200,
    marginBottom: 10,
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },
});
