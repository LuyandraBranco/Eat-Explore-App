import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { CaretLeft, Heart, Star, Timer } from "phosphor-react-native";
import { StarReviewsFilter } from "../../components/StarReviewsFilter";

export function Food({ navigation }: any) {
  return (
    <SafeAreaView style={styles.containerFood}>
      <StatusBar style="light" backgroundColor="#1E1E1E" />
      <View style={styles.containerFoodItem}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CaretLeft size={32} color="#fff" style={styles.headerArrow} />
          </TouchableOpacity>
          <Text style={styles.food}>Mufete</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Heart size={30} color="#fff" style={styles.heart}/>
          </TouchableOpacity>
        </View>
        <View style={styles.containerImage}>
          <View style={styles.image}>
            <Image
              source={require("../../assets/images/mufete.png")}
              style={styles.img}
            />
          </View>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>35000 AOA</Text>
      </View>
      <View>
        <StarReviewsFilter />
      </View>

      <View style={styles.reviewContainer}>
        <View style={styles.time}>
          <Timer size={20} />
          <Text style={styles.txt}>15 min</Text>
        </View>
        <View style={styles.review}>
          <Star size={18} />
          <Text style={styles.txt}>4</Text>
        </View>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.foodDescription}>
          O peixe é geralmente marinado com alho, limão e sal antes de ser
          grelhado, o que adiciona um sabor delicioso. O molho, conhecido como
          "molho de mufete".
        </Text>
      </View>
    </SafeAreaView>
  );
}
