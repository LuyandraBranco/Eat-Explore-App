import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import styles from "./styles";
import { CaretLeft } from "phosphor-react-native";
import { StarReviewsFilter } from "../../components/StarReviewsFilter";
import { useState } from "react";

export function Review({ restaurantData, navigation }: any) {
  const [userReview, setUserReview] = useState("");
  return (
    <SafeAreaView style={styles.reviewContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CaretLeft size={24} color="#000" style={styles.headerArrow} />
        </TouchableOpacity>
        {/* <Text style={styles.restaurantName}>aa</Text> */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        ></TouchableOpacity>
      </View>
      <View style={styles.classifyContainer}>
        <Text style={styles.titleReview}>Classifique a sua experiência</Text>
        <Text style={styles.descriptionClassify}>
          Partilhe a sua experiência e ajude outras pessoas
        </Text>
        <View style={styles.classify}>
          <View style={styles.imgContainer}></View>
          <TouchableOpacity>
            <StarReviewsFilter onPress={() => {}} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.items}>
        <TextInput
          style={styles.textInput}
          onChangeText={setUserReview}
          value={userReview}
          placeholder="Partilhe detalhes de como foi sua experiência"
        />
        <TouchableOpacity style={styles.add}>
          <Text style={styles.txtButton}>Publicar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.txtButton}>Publicar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
