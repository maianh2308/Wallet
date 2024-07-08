import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const options = ["Home", "Profile", "Accounts", "Stats", "Settings", "Help"];
const NavigationList = () => {
  return (
    <FlatList
      data={options}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginBottom: 20,
            borderLeftColor: Colors.yellow,
            borderLeftWidth: index === 0 ? 5 : 0,
          }}
        >
          <Text
            style={{
              color: Colors.blackText,
              fontWeight: index === 0 ? "bold" : "normal",
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => `${index}`}
    />
  );
};

export default NavigationList;
