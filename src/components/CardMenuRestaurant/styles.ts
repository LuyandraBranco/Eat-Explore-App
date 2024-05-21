import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerCard: {
    width: "100%",
    height: "auto",
    marginTop: 5,
    flexDirection: "column",
  },
  title: {
    fontSize: 17,
    marginLeft: 5,
    fontFamily: "Inter_500Medium",
  },
  containerItems: {
    width: "100%",
    justifyContent: "space-evenly",
    height: 120,
    marginTop: 5,
  },
  itemCategory: {
    flexDirection: "column",
    marginRight: 8,
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 6,
    marginBottom: 2,
  },
  txt: {
    marginTop: 5,
    fontFamily: "Inter_400Regular",
  },
});
