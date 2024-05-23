import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    borderRadius: 6,
    backgroundColor: "#f8edeb",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  imageContainer: {
    width: "30%",
    height: "100%",
    marginRight: 2,
    borderRadius: 6,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 6,
  },
  textContainer: {
    flex: 0.8,
  },
  title: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Inter_500Medium",
    marginBottom: 6,
  },
  subtitle: {
    color: "#000",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
  button: {
    marginRight: 20,
  },
});
