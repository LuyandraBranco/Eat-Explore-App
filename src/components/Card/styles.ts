import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerCard: {
    width: "100%",
    height: "19%",
    marginTop: 15,
    flexDirection: "column",
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 23,
  },
  containerItems: {
    width: "100%",
    justifyContent: "space-evenly",
    height: 120,
    marginTop: 5,
    paddingHorizontal: 5
  },
  itemCategory: {
    flexDirection: "column",
    marginRight: 8,
   
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 6,
    marginBottom: 2
  },
});
