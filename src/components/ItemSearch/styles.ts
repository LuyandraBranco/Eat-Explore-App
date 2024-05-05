import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerItem: {
    flexDirection: "column",
    width: 310,
    height: 143,
    borderRadius: 8,
    backgroundColor: "#333",
    marginBottom: 20
  },
  imagem: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  name: {
    color: "#fff",
    marginLeft: 20,
    fontWeight: "600",
    marginBottom: 0,
  },
  location: {
    color: "#fff",
    marginLeft: 20,
    marginBottom: 1,
  },
  item:{
    flexDirection: "column"
  }
});
