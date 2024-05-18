import {StyleSheet } from "react-native";

export default StyleSheet.create({
  containerHome: {
    flex: 1,
    height: "auto",
    alignItems: "center",
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  header: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
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
    borderRadius: 50
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
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20
  },
});
