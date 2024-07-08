import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const Menu = ({ uri }) => {
  return (
    <View
      style={{
        width: 43,
        height: 43,
        marginHorizontal: 13,
        borderRadius: 21.5,
        backgroundColor: Colors.darkBlue,
      }}
    >
      <Image
        source={{ uri }}
        style={{
          ...StyleSheet.absoluteFillObject,
          width: undefined,
          height: undefined,
          borderRadius: 21.5,
        }}
      />
    </View>
  );
};

export default Menu;
