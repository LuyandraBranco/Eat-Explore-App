import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerRestaurantAbout: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  containerRestaurantItem: {
    width: "100%",
    height: "35%",
  },
  header: {
    width: "100%",
    height: "18%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerArrow: {
    marginLeft: -5,
  },
  restaurantName: {
    color: "#000",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Inter_500Medium",
    textTransform: "uppercase"
  },
  containerImage: {
    width: "100%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  containerMap: {
    width: "100%",
    height: "50%",
    marginTop: 15,
  },
  mapContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 7,
    overflow: "hidden",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 6,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 6,
  },
  containerText: {
    width: "100%",
    height: "45%",
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    color: "#000",
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Inter_500Medium",
  },
  restaurantDescription: {
    color: "#000",
    textAlign: "justify",
    fontSize: 15,
    marginTop: 10,
    fontFamily: "Inter_400Regular",
    marginRight: 30,
    marginBottom: 20,
  },
});
