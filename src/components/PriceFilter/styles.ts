import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContent: {
    flexGrow: 1, 
  },
  
  headerContainer:{
    width: "100%",
    maxHeight: "5%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "1%"
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "95%",
    maxHeight: "95%",
    marginTop: 10
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  filterOption: {
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  applyButton: {
    width: 326,
    height: 48,
    backgroundColor: "#E5383B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 20,
  },
  txtButton: {
    color: "#fff",
    fontSize: 16,
  },
});
