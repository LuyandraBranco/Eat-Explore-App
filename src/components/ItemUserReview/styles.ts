import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    flexDirection: "column",
    marginBottom: 12,
    marginTop: 10,
  },
  item: {
    width: "100%",
    height: 60,
    flexDirection: "row",
  },
  imgContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#ddd",
    borderRadius: 50,
    marginRight: 10,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  informationContainer: {
    width: "auto",
    height: "100%",
    flexDirection: "column",
    marginRight: 10,
  },
  info: {
    width: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    marginLeft: 4,
  },
  date: {
    fontFamily: "Inter_400Regular",
  },
  review: {
    width: "100%",
    height: "auto",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  txtReview: {
    fontFamily: "Inter_400Regular",
    marginTop: 5,
    marginLeft: 5,
    paddingBottom: 15,
  },
});
