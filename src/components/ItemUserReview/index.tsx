import { View, Text } from "react-native";
import styles from "./styles";
import { StarRating } from "../StarRating";
import { ItemUserReviewProps } from "../../@types/ItemUserReviewProps";

export function ItemUserReview({
  username,
  imgUrl,
  rating,
  date,
  review
}: ItemUserReviewProps) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.imgContainer}></View>
        <View style={styles.informationContainer}>
          <Text style={styles.username}>{username}</Text>
          <View style={styles.info}>
            <StarRating rating={3} size={25} />
            <Text style={styles.date}> {date}</Text>
          </View>
        </View>
      </View>
      <View style={styles.review}>
        <Text style={styles.txtReview}>
         {review}
        </Text>
      </View>
    </View>
  );
}
