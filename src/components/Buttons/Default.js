import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

const Default = ({label, icon, onPress}) => {
  return (
    <TouchableOpacity style={style.container} onPress={() => (onPress ? onPress(): {})}>
      <Text style= {style.text}>{label}</Text>
      <FontAwesome name={icon} color={Colors.blackText} />
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.yellow,
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  text: {
    color: Colors.blackText,
    fontWeight: "bold",
    marginRight: 10,
  }
})
export default Default;
