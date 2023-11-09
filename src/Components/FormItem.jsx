import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function FormItem({itemTitle,itemType,children}) {
  return (
    <View>
      <Text style={styles.itemTitle}>{itemTitle}</Text>
      {children}
      {/* <TextInput style={styles.itemInput} maxLength={30}></TextInput> */}
    </View>
  )
}

const styles = StyleSheet.create({
    itemTitle: {
      color: Colors.gray,
      marginTop: 40,
      fontSize: 16,
    },
    itemInput: {
      borderBottomWidth: 2,
      borderBottomColor: "#E4E4E4",
      fontSize: 18,
      marginTop: 15,
    }
})