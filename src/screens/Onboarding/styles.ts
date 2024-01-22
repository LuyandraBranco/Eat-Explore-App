import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerOnboarding: {
    backgroundColor: "#1E1E1E",
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 10
  },
  headerTxt:{
    color: "#fff",
    fontSize: 16,
    marginRight: 20,
    fontWeight: "600"
  },
  headerArrow: {
    marginLeft: 15
  },
  itemsContainer: {
    width: '100%',
    height: '85%',
    alignItems: "center",
  },
  containerTitle: {
    width: 303,
    height: 95
  },
  title: {
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold"
  },
  containerDescription: {
    width: 303,
    height: 75,
    marginBottom: 20
  
  },
  description: {
    color: "#B3B0B8",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20
  },
  imageContainer: {
    width: "90%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },

  imagem: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  button: {
    width: 326,
    height: 52,
    backgroundColor: "#E5383B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  txtButton: {
    color: "#fff",
    fontSize: 16,
  },
});
