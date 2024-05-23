import { StyleSheet } from "react-native";

export default StyleSheet.create({
  requestContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 40,
    position: "relative",
  },
  header: {
    width: "100%",
    height: "6%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    position: "absolute",
    top: 38,
  },
  headerName: {
    color: "#333",
    fontSize: 17,
    textAlign: "center",
    fontFamily: "Inter_500Medium",
    textTransform: "uppercase",
  },
  itemsRequest: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  requestImage: {
    width: "80%",
    height: "35%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  txtRequest: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    color: "#ddd",
  },
});
