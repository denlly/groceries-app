import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function MainIcon() {
  return (
    <View style={styles.iconContainer}>
      <Image
        style={styles.icon}
        source={require("../../assets/mainicon.png")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  icon: {
    width: 160,
    height: 140,
  },
});
