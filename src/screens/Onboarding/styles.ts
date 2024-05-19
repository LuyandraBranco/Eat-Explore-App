import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerOnboarding: {
    backgroundColor: "#1E1E1E",
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingTop: 40,
    flex: 1,
  },
  header: {
    width: "100%",
    height: "5.5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txt: {
    marginLeft: -8,
  },
  headerTxt: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter_500Medium",
  },
  itemsContainer: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTitle: {
    width: 303,
    height: 95,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
    fontFamily: "Inter_600SemiBold",
  },
  containerDescription: {
    width: 303,
    height: 80,
    marginBottom: 20,
  },
  description: {
    color: "#B3B0B8",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
    fontFamily: "Inter_400Regular",
  },
  imageContainer: {
    width: "100%",
    height: "62%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  imagem: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  button: {
    width: "95%",
    height: 52,
    backgroundColor: "#E5383B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  txtButton: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter_400Regular",
  },
});
