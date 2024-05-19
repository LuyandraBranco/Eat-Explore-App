import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: 115,
    borderRadius: 6,
    backgroundColor: "#edede9",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  imageContainer: {
    width: "40%",
    height: "100%",
    marginRight: 1,
    // borderRadius: 6
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 6,
  },
  textContainer: {
    flex: 0.9,
  },
  title: {
    color: "#1E1E1E",
    fontSize: 16,
    marginBottom: 6,
    fontFamily: "Inter_600SemiBold",
    marginRight: 15
  },
  subtitle: {
    color: "#1E1E1E",
    fontSize: 14,
    fontFamily: "Inter_500Medium",
    marginRight: 15,
    marginTop: 5
  },
  button: {
    marginRight: 20
  },
});
