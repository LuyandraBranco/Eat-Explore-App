import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";

export function TermModal({ visible, onClose, onApply }: any) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity activeOpacity={1} onPressOut={onClose}>
        <Text>Termos</Text>
      </TouchableOpacity>
    </Modal>
  );
}
