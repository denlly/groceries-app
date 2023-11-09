import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../Utils/Colors"
export default function HeaderTitle({ mainTitle, subTitle }) {
  return (
    <View>
      <Text style={styles.mainTitle}>{mainTitle}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 32,
    fontWeight: "500",
    color: Colors.third,
    lineHeight: 64
  },
  subTitle: {
    fontSize: 12,
    color: 'gray',
  }
});
