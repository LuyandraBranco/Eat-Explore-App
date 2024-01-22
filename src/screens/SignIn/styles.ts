import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: "#101114",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    width: "100%",
    height: '15%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  headerArrow: {
    marginLeft: 25,
    color: "#fff"
  },
  containerItems: {
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  containerDescription: {
    width: 329,
    height: 60,
  },
  description: {
    color: "#B3B0B8",
    marginBottom: 20,
    textAlign: "center",
  },
  form: {
    width: "100%",
    height: "48%",
    marginBottom: 20,
  },
  formGroup: {
    flexDirection: "column",
  },
  txtInput: {
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    height: 48,
    backgroundColor: "#fff",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 4,
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
    marginBottom: 10,
  },
  button: {
    width: 326,
    height: 48,
    backgroundColor: "#E5383B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  txtButton: {
    color: "#fff",
    fontSize: 16,
  },
  txtAccount: {
    color: "#B3B0B8",
    textAlign: "right",
    marginBottom: 20,
  },
  txt: {
    color: "#B3B0B8",
    marginBottom: 30,
  },
  socialbutton: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  google: {
    width: 160,
    height: 48,
    backgroundColor: "#1E1F24",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  apple: {
    width: 160,
    height: 48,
    backgroundColor: "#1E1F24",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 17, 
  },
  socialTxt: {
    color: "#fff",
  },
  txtN: {
    color: "#B3B0B8",
    marginTop: 5,
  },
  txtBold:{
    color: "#fff",
    fontWeight: "600"
  }
});
