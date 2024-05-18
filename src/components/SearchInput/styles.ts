import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerSearch: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
  },
  headerTxt: {
    color: "#000",
    fontSize: 18,
  },
  headerDescription: {
    color: "#000",
  },
  containerItem:{
    width: "80%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center"
  },
  txt: {
   textAlign: "center"
  },
  container: {
    flexDirection: 'row',
    width: 335,
    height: 40,
    alignItems: 'center',
  },
  iconContainer: {
    position: "absolute",
    left: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 40,
  },
  cancelButton: {
    position: "absolute",
    right: 10,
  },
  filterIcon: {
    position: "absolute",
    right: 10,
  },
});
