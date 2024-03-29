import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerHome: {
    flex: 1,
    alignItems: "center",
    flexDirection: 'column'
  },
  header: {
    width: "100%",
    height: "10%",
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
    fontWeight: "600"
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
  containerCarousel: {
    width: 378,
    height: 160,
    marginTop: 5,
  },
});
