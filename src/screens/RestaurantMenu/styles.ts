import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerRestaurantMenu: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 1,
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
  },
  containerImage: {
    width: "100%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
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
  },
  title: {
    color: "#000",
    fontSize: 17,
    textAlign: "left",
    fontWeight: "500",
    marginLeft: 30,
  },
  containerItems: {
    flex: 1,
  },
});
