import React from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface StarRatingProps {
  rating: number;
}

export function StarRating({ rating }: StarRatingProps) {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    const starName: "star" | "star-border" =
      i <= rating ? "star" : "star-border";
    stars.push(
      <MaterialIcons key={i} name={starName} size={18} color="#FFD700" />
    );
  }
  return <View style={{ flexDirection: "row" }}>{stars}</View>;
}
