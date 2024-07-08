import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const TransparentWithIcon = ({ onPress, label, icon }) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
      }}
      onPress={onPress ? onPress() : {}}
    >
      <Ionicons name={icon} color={Colors.blackText} size={16} />
      <Text style={{ color: Colors.blackText, fontWeight: "bold", marginLeft: 10}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TransparentWithIcon;
