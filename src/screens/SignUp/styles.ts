import { StyleSheet } from "react-native";
import styles from "../Home/styles";

export default StyleSheet.create({
  containerUp: {
    flex: 1,
    backgroundColor: "#101114",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  header: {
    width: "100%",
    height: "6%",
    justifyContent: "center",
    marginBottom: 10,
  },
  headerArrow: {
    marginLeft: -8,
    color: "#fff",
  },
  containerItems: {
    width: "100%",
    alignItems: "center",
    height: "80%",
  },
  title: {
    textAlign: "center",
    marginBottom: 25,
    color: "#fff",
    fontSize: 20,
    fontFamily: "Inter_600SemiBold",
  },
  containerDescription: {
    width: 329,
    height: 60,
    marginBottom: 15,
  },
  description: {
    color: "#B3B0B8",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Inter_400Regular",
  },
  form: {
    width: "100%",
    height: "60%",
    marginBottom: 20,
  },
  formGroup: {
    flexDirection: "column",
  },
  txtInput: {
    color: "#fff",
    marginBottom: 5,
    fontFamily: "Inter_500Medium",
  },
  input: {
    height: 48,
    backgroundColor: "#fff",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 4,
    fontFamily: "Inter_400Regular",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    backgroundColor: "#fff",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    paddingLeft: 10,
  },
  containerButton: {
    width: "100%",
    height: 49,
    marginTop: 5,
    marginBottom: 25,
  },
  button: {
    width: "100%",
    height: 48,
    backgroundColor: "#E5383B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  txtButton: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter_500Medium",
  },
  txtN: {
    color: "#B3B0B8",
    marginTop: 5,
    fontFamily: "Inter_400Regular",
  },
  color: {
    color: "#E5383B",
    fontFamily: "Inter_500Medium",
  },
  txtBold: {
    color: "#fff",
    fontFamily: "Inter_600SemiBold",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  label: {
    marginLeft: 8,
    fontFamily: "Inter_400Regular",
    color: "#B3B0B8",
  },
});
