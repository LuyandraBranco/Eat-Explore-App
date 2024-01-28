import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerRestaurantMenu: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  containerRestaurantItem: {
    width: "100%",
    height: "40%",
  },
  header: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  headerArrow: {
    marginLeft: 15,
  },
  headerHeart: {
    marginRight: 15,
  },
  restaurantName: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "400",
  },
  containerImage: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 318,
    height: 141,
    borderRadius: 6,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  containerItems: {
    width: "100%",
    height: "40%",
  },
  title: {
    color: "#000",
    fontSize: 17,
    textAlign: "left",
    fontWeight: "500",
    marginLeft: 30,
  },
  restaurantDescription: {
    color: "#000",
    textAlign: "justify",
    fontSize: 15,
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
  },
});
