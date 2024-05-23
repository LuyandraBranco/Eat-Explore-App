import { StyleSheet } from "react-native";

export default StyleSheet.create({
  favoriteContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 45,
  },
  header: {
    width: "100%",
    height: "7%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  headerName: {
    color: "#333",
    fontSize: 17,
    textAlign: "center",
    fontFamily: "Inter_500Medium",
    textTransform: "uppercase",
  },
  nav: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txtNav: {
    color: "#000",
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    paddingBottom: 4
  },
  itemsCart: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  cartImage: {
    width: "80%",
    height: "35%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
  
});
