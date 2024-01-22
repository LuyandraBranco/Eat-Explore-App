import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerHome: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: "10%",
    backgroundColor: "grey",
    marginTop: 45,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  headerText: {
    marginLeft: 20,
  },
  headerTxt: {
    color: "#000",
    fontSize: 18,
  },
  txt: {
    color: "#F55F5F",
    fontSize: 18,
  },
  headerDescription: {
    color: "#000",
  },
  containerImage: {
    width: 43,
    height: 43,
    borderRadius: 50,
    marginRight: 10,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  carouselItem: {
    width: 340,
    height: 143,
    alignItems: "center",
    justifyContent: "center",
  },
  carouselImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
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
