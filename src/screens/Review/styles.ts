import { StyleSheet } from "react-native";

export default StyleSheet.create({
  reviewContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 1,
  },
  containerRestaurantItem: {
    width: "100%",
    height: "35%",
  },
  header: {
    width: "100%",
    height: "18%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerArrow: {
    marginLeft: -5,
  },
  restaurantName: {
    color: "#000",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Inter_500Medium",
    textTransform: "uppercase",
  },
  containerImage: {
    width: "100%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 6,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  title: {
    color: "#000",
    fontSize: 17,
    textAlign: "left",
    fontWeight: "500",
    marginLeft: 30,
  },
  geralReviewContainer: {
    width: "100%",
    height: "23%",
    flexDirection: "column",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  titleReview: {
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    marginBottom: 15,
  },
  review: {
    textAlign: "center",
    fontSize: 50,
    fontFamily: "Inter_500Medium",
  },
  ratingContainer: {
    alignItems: "center",
  },
  numberReviews: {
    marginTop: 5,
    fontSize: 15,
    fontFamily: "Inter_400Regular",
  },
  classifyContainer: {
    width: "100%",
    height: "17.5%",
    flexDirection: "column",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  descriptionClassify: {
    fontFamily: "Inter_400Regular",
  },
  classify: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  imgContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#ddd",
    borderRadius: 50,
    marginRight: 10,
  },
  items: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
  },
  text: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
});