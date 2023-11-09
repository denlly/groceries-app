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

export default function Signup() {
  const [isVisable, setIsVisable] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
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
            mainTitle="注 册"
            subTitle="输入你的认证信息登录后并继续"
          />
          <View>
            <FormItem
              itemTitle="用户名"
              children={
                <TextInput
                  style={styles.itemInput}
                  maxLength={30}
                  value={userInfo.username}
                  placeholder="英文字母，数字，-，_等符号"
                  onChangeText={(val) => {
                    // console.log('')
                    setUserInfo({ ...userInfo, username: val });
                  }}
                ></TextInput>
              }
            ></FormItem>
            <FormItem
              itemTitle="Email"
              children={
                <TextInput
                  style={styles.itemInput}
                  maxLength={30}
                  value={userInfo.email}
                  placeholder="example@gmail.com"
                  onChangeText={(val) => {
                    setUserInfo({ ...userInfo, email: val });
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
                    value={userInfo.password}
                    placeholder="少于30位的英文，字母，符号组合"
                    keyboardType="ascii-capable"
                    onChangeText={(val) => {
                      setUserInfo({ ...userInfo, password: val });
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
              <Text style={styles.submitText}>注 册</Text>
            </TouchableOpacity>
            <SignTip isSignup={true} />
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
