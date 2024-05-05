import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerProfile: {
    flex: 1,
    backgroundColor: "#F5f5f5",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  headerArrow: {
    marginLeft: 15,
  },
  containerItem: {
    width: "100%",
    height: "85%",
    alignItems: "center",
  },
  button: {
    width: 200,
    height: 50,
    flexDirection: "row",
    backgroundColor: "#e63946",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 24,
    gap: 10,
  },
  label: {
    fontSize: 18,
    color: "#FFF",
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
  },
  info: {
    fontSize: 18,
  },
  containerContent: {
    width: "100%",
    height: "47%",
    marginTop: 60,
    backgroundColor: "#fff",
  },
  itemContent: {
    width: "90%",
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    marginLeft: 20,
  },
  textContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontWeight: "500",
  },
  title: {
    marginLeft: 20,
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
  },
  img: {
    width: 96,
    height: 96,
    borderRadius: 96,
    marginVertical: 24,
  },
});
