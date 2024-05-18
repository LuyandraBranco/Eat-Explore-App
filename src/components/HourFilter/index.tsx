import React, { useState } from "react";
import { View, Text, Platform, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./styles";

export function HourFilter() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(false);

  // Função para mostrar o seletor
  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  // Função chamada quando uma hora é selecionada
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => showMode("time")} style={styles.button}>
        <Text style={styles.txtButton}>Selecione a Hora</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}
