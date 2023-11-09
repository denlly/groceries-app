import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function SignTip({ isSignup, isSignin }) {

  const nav = useNavigation()
  return (
    <>
      {isSignup ? (
        <Text style={styles.common}>
          如果已经有账号，请
          <Text style={styles.heightline}
            onPress={() => {
              nav.replace("Signin");
            }}
          >
            登录
          </Text>
        </Text>
      ) : (
        <></>
      )}
      {isSignin ? (
        <Text style={styles.common}>
          如果没有账号，请
          <Text style={styles.heightline}
            onPress={() => {
              nav.replace("Signup");
            }}
          >
            注册
          </Text>
        </Text>
      ) : (
        <></>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  common :{
    marginTop: 20,
    textAlign: "center",
    color: "black",
    letterSpacing: 1
  },
  heightline:{
    color: Colors.primary,
    fontWeight: "900",
  }
})