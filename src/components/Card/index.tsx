import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import nearItems from "../../data/nearData";

export function Card({ navigation }: any) {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.itemCategory}
      onPress={() => {
        console.log(`Categoria selecionada: ${item.title}`);
      }}
    >
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.containerCard}>
      <Text style={styles.title}>Cardápio</Text>
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
