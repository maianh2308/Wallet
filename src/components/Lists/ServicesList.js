import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const ServicesList = ({ list }) => {
  return (
    <FlatList
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
      data={list}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={{
            width: 70,
            alignItems: "center",
            marginHorizontal: 10,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              backgroundColor: Colors.offWhite,
              width: 70,
              height: 70,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 16,
              marginBottom: 10,
            }}
          >
            <FontAwesome5 name={item.icon} size={30} color={Colors.darkBlue} />
            <Text
              style={{
                textAlign: "center",
                fontSize: 13,
                color: Colors.darkBlue,
                textTransform: "capitalize",
              }}
            >
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      numColumns={4}
    />
  );
};

export default ServicesList;
