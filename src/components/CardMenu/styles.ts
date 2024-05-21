import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerCard: {
    width: "100%",
    height: "auto",
    marginTop: 5,
    flexDirection: "column",
  },
  title: {
    fontSize: 17,
    marginLeft: 5,
    fontFamily: "Inter_500Medium",
  },
  containerItems: {
    width: "100%",
    justifyContent: "space-evenly",
    height: 120,
    marginTop: 5,
  },
  itemCategory: {
    flexDirection: "column",
    marginRight: 8,
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 6,
    marginBottom: 2,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  zoomableView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  fullscreenImage: {
    resizeMode: "contain",
    borderRadius: 0,
    backgroundColor: "red",
  },
  closeButton: {
    position: "absolute",
    top: 27,
    right: 20,
    padding: 10,
    borderRadius: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
