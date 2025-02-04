import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const AddNew = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.yellow,
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        borderRadius: 25,
      }}
      onPress={onPress}
    >
      <Feather name="plus" color={Colors.blackText} size={20} />
    </TouchableOpacity>
  );
};

export default AddNew;
