import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { X } from "phosphor-react-native";
import { Dimensions } from "react-native";
import nearItems from "../../data/nearData";
import styles from "./styles";

export function CardMenu({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const images = nearItems.map((item) => {
    return {
      url: "",
      props: {
        source: item.image,
      },
    };
  });

  const openModal = (index: any) => {
    setCurrentImageIndex(index);
    setModalVisible(true);
  };

  const renderItem = ({ item, index }: any) => (
    <TouchableOpacity
      style={styles.itemCategory}
      onPress={() => openModal(index)}
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
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <ImageViewer
          imageUrls={images}
          index={currentImageIndex}
          enableSwipeDown={true}
          onSwipeDown={() => setModalVisible(false)}
          enableImageZoom={true}
          saveToLocalByLongPress={true}
          style={styles.fullscreenImage} 
        />
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setModalVisible(false)}
        >
          <X color="#fff" />
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
