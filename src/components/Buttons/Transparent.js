import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const Transparent = ({label, onPress}) => {
  return (
    <TouchableOpacity
    style= {{
        paddingVertical: 10,
        alignItems: "center",
        flex: 1,
    }}
    onPress={() => (onPress ? onPress(): {})}>
      <Text style={{color: Colors.blackText}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Transparent;
