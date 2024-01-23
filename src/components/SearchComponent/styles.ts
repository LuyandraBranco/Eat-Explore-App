import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
