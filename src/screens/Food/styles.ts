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
  heart: {
    marginRight: 15,
  },
  food: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Inter_500Medium",
    flex: 1,
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
  priceContainer: {
    width: "100%",
    height: 40,
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 28,
    fontFamily: "Inter_500Medium",
  },
  containerText: {
    width: "100%",
    height: "30%",
  },
  revi: {
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  reviewContainer: {
    width: "100%",
    height: 30,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginRight: 10,
  },
  review: {
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  restaurantName: {
    color: "#000",
    fontSize: 22,
    textAlign: "center",
    marginTop: 25,
    fontFamily: "Inter_500Medium",
  },
  foodDescription: {
    color: "#000",
    textAlign: "justify",
    fontSize: 17,
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    fontFamily: "Inter_400Regular",
  },
  txt: {
    fontFamily: "Inter_400Regular",
  },
});
