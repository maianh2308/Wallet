import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import getHeaderContainerStyle from "./getHeaderContainerStyle";
import Colors from "../../constants/Colors";
import { useDispatch } from "react-redux";
import { removeAuth } from "../../redux/reducers/authReducer";

const MainHeader = ({ nomargin = false, openDrawer }) => {
  const dispatch = useDispatch();
  return (
    <View
      style={[
        {
          height: 45,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 13,
        },
        getHeaderContainerStyle(nomargin),
      ]}
    >
      <TouchableOpacity onPress={() => openDrawer()}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../assets/logo.png")}
            resizeMode="contain"
            style={{ width: 40 }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginLeft: 10,
              color: Colors.blackText,
            }}
          >
            eWallet
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          paddingHorizontal: 12,
        }}
        onPress={() => dispatch(removeAuth({}))}
      >
        <Text
          style={{
            color: Colors.darkBlue,
            fontSize: 16,
            fontWeight: "bold",
            marginRight: 8,
          }}
        >
          Log Out
        </Text>
        <Entypo style={{ color: Colors.darkBlue }} name="log-out" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;
