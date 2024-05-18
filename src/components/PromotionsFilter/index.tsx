import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import styles from './styles';

export function PromotionFilter() {
  const [isPromotionActive, setIsPromotionActive] = useState(false);

  const toggleSwitch = () => setIsPromotionActive(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promoções Ativas:</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#E5383B" }}
        thumbColor={isPromotionActive ? "#333" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isPromotionActive}
      />
      {isPromotionActive && (
        <Text style={styles.promotionText}>Mostrando apenas restaurantes com promoções.</Text>
      )}
    </View>
  );
}