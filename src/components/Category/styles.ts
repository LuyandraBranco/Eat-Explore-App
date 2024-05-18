import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerCategory: {
    width: "100%",
    height: "16%",
    marginTop: 15,
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 15,
  },
  containerItems: {
    width: "100%",
    height: 90,
    marginTop: 5,
    paddingHorizontal: 2.5
  },
  cards: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
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
    marginBottom: 2
  },
});
