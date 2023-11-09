import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import Colors from "../Utils/Colors";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
  const nav = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      nav.navigate("Signin");
      // alert('跳转')
    }, 2000);
  });
  return (
    <View style={styles.page}>
      <StatusBar style="light" />
      <View style={styles.iconContainer}>
        <Image
          style={styles.mainIcon}
          source={require("../../assets/mainicon.png")}
        />
        <View>
          <Text style={styles.title}>萝卜杂货</Text>
          <Text style={styles.subTitle}>萝卜青菜各有所爱</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.primary,
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  mainIcon: {
    width: 80,
    height: 70,
    tintColor: Colors.secondary,
  },
  title: {
    fontSize: 40,
    color: Colors.secondary,
  },
  subTitle: {
    fontSize: 16,
    color: Colors.secondary,
    letterSpacing: 5,
  },
});
