import { StyleSheet } from "react-native";

export default StyleSheet.create({
  carouselItem: {
    width: 370,
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15
  },
  carouselImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 15
  },
  carouselDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: "#F55F5F", // Cor das bolinhas ativas
  },
  carouselInactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: "#C1C1C1", // Cor das bolinhas inativas
  },
});
