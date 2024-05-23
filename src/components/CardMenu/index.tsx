import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ImageView from "react-native-image-viewing";
import { X } from "phosphor-react-native";
import nearItems from "../../data/nearData";
import styles from "./styles";

export function CardMenu({ navigation }: any) {
  const [visible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // const images = nearItems.map((item) => ({
  //   uri: item.image.uri,
  // }));

   const images = nearItems.map((item) => ({
    uri: Image.resolveAssetSource(item.image).uri,
  }));

  const openImage = (index: number) => {
    setSelectedImage(index);
    setIsVisible(true);
  };

  const renderItem = ({ item, index }: any) => (
    <TouchableOpacity
      style={styles.itemCategory}
      onPress={() => openImage(index)}
    >
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.containerCard}>
      <Text style={styles.title}>Cardápio</Text>
      <FlatList
        data={nearItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.containerItems}
      />
      <ImageView
        images={images}
        imageIndex={selectedImage}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </View>
  );
}
