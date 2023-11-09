import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";

export default function DescriptionSection() {
  return (
    <View>
      <Text style={styles.text} numberOfLines={2}>
        我们非常荣幸为阁下提供服务，点击继续意味着阁下同意我们的服务和
        <Text style={styles.heightline}>政策协议</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "gray",
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 400,
    lineHeight: 30,
    letterSpacing: 0.7,
  },
  heightline: {
    color: Colors.primary,
  },
});
