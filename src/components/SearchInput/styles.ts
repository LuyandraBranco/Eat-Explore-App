import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    fontFamily: 'Inter_400Regular'
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
