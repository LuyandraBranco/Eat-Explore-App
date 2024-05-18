import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingBottom: 25,
  },
  instructions: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
  stars: {
    flexDirection: "row",
  },
  selectedStar: {
    color: "#FFD700",
  },
  unselectedStar: {
    color: "#CCCCCC",
  },
});
