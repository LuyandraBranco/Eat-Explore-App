import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerFood: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  containerFoodItem: {
    width: "100%",
    height: "60%",
    backgroundColor: "#E5383B",
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
  food: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
    flex: 1,
    marginLeft: -30
  },
  containerImage: {
    width: "100%",
    height: "65%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    backgroundColor: "#111",
    borderRadius: 200,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  containerText: {
    width: "100%",
    height: "30%",
  },
  restaurantName: {
    color: "#000",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "600",
    marginTop: 25,
  },
  foodDescription: {
    color: "#000",
    textAlign: "justify",
    fontSize: 17,
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
  },
});
