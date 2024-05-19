import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerCategory: {
    width: "100%",
    height: "39%",
    marginTop: 15,
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    fontFamily: "Inter_600SemiBold",
  },
  txt: {
    marginTop: 7,
    marginBottom: 10,
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  containerButtons: {
    width: "100%",
    height: 50,
    flexDirection: "row",
  },
  cards: {
    width: "100%",
    height: "99%",
    flexDirection: "row",
    marginTop: 10,
  },
  itemCategory: {
    flexDirection: "column",
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 65,
    height: 60,
    borderRadius: 15,
    marginBottom: 2,
  },
});
