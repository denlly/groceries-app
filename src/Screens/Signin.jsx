import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MainIcon from "../Components/MainIcon";
import HeaderTitle from "../Components/HeaderTitle";
import DescriptionSection from "../Components/DescriptionSection";
import { StatusBar } from "expo-status-bar";
import FormItem from "../Components/FormItem";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import SignTip from "../Components/SignTip";

export default function Signin() {
  const [isVisable, setIsVisable] = useState(false);
  const [signinInfo, setSigninInfo] = useState({
    email: "",
    password: "",
  });
  const nav = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar style="dark"></StatusBar>
      <ScrollView style="">
        <View style={styles.mainConstainer}>
          <MainIcon />
          <HeaderTitle
            mainTitle="登 录"
            subTitle="输入你的认证信息登录后并继续"
          />
          <View>
            <FormItem
              itemTitle="电邮"
              children={
                <TextInput
                  style={styles.itemInput}
                  maxLength={30}
                  onchangeText={(val) => {
                    setSigninInfo({ ...signinInfo, email: val });
                  }}
                ></TextInput>
              }
            ></FormItem>
            <FormItem
              itemTitle="密码"
              children={
                <View style={styles.itemInput}>
                  <TextInput
                    secureTextEntry={!isVisable}
                    style={styles.inputPassword}
                    maxLength={30}
                    keyboardType="ascii-capable"
                    onchangeText={(val) => {
                      setSigninInfo({ ...signinInfo, password: val });
                    }}
                  ></TextInput>
                  <Ionicons
                    onPress={() => {
                      setIsVisable(!isVisable);
                    }}
                    name={isVisable ? "ios-eye-off-outline" : "ios-eye-outline"}
                    size={24}
                    color="gray"
                  />
                </View>
              }
            ></FormItem>
            <DescriptionSection />
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => {
                alert("Press one time.");
              }}
            >
              <Text style={styles.submitText}>登 录</Text>
            </TouchableOpacity>
            <SignTip isSignin={true} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainConstainer: {
    alignSelf: "center",
    width: "90%",
  },
  itemInput: {
    borderBottomWidth: 2,
    borderBottomColor: "#E4E4E4",
    fontSize: 18,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputPassword: {
    width: "90%",
    fontSize: 18,
  },
  submitBtn: {
    backgroundColor: Colors.primary,
    height: 50,
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  submitText: {
    fontSize: 24,
    color: Colors.secondary,
    fontWeight: "500",
  },
});
