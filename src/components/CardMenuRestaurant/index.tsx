import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import nearItems from "../../data/nearData";

export function CardMenuRestaurant({ navigation }: any) {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.itemCategory}
      onPress={() => {
        navigation.navigate("Food");
      }}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.txt}>Salada</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.containerCard}>
      <Text style={styles.title}>Grelhados</Text>
      <View style={styles.containerItems}>
        <FlatList
          data={nearItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.containerItems}
        />
      </View>
    </View>
  );
}
