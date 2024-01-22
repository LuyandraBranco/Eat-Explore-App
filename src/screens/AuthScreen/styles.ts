import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerAuth: {
    backgroundColor: "#101114",
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageContainer: {
    width: "90%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10
  },

  imagem: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  containerTitle: {
    width: 303,
    height: 40,
    marginBottom: 10
  },
  title: {
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold"
  },
  containerDescription: {
    width: 280,
    height: 70,
    marginBottom: 10
  },
  description: {
    color: "#B3B0B8",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20
  },
  button: {
    width: 326,
    height: 52,
    backgroundColor: "#E5383B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    marginBottom: 13
  },
  buttonLogin:{
    width: 326,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    backgroundColor: "#1E1F24"
  },
  txtButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500"
  },
});
