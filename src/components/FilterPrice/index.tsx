// import React, { useState } from "react";
// import { View, Text } from "react-native";
// import Slider from "@react-native-community/slider";
// import styles from "./styles";

// export function PriceFilter() {
//   const [priceRange, setPriceRange] = useState([0, 100]);

//   return (
//     <View style={styles.filterOptionsContainer}>
//       <Text>
//         Preço: {priceRange[0]} - {priceRange[1]}
//       </Text>
//       <Slider
//         style={{ width: "100%", height: 40 }}
//         minimumValue={0}
//         maximumValue={100}
//         step={1}
//         value={priceRange[0]}
//         onValueChange={(value: any) => setPriceRange([value, priceRange[1]])}
//       />
//       <Slider
//         style={{ width: "100%", height: 40 }}
//         minimumValue={0}
//         maximumValue={100}
//         step={1}
//         value={priceRange[1]}
//         onValueChange={(value: any) => setPriceRange([priceRange[0], value])}
//       />
//     </View>
//   );
// }
