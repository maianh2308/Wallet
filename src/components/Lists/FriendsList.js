import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Avatar from '../Avatars/Menu'
import { AddNew } from "../Buttons";
import Colors from "../../constants/Colors";

const FriendsList = ({ list }) => {
  return (
    <View>
      <FlatList
        contentContainerStyle={{
          alignItems: "center",
          paddingLeft: 13,
          marginBottom: 40,
        }}
        data={list}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <>
            {index === 0 ? (
              <AddNew key={item.fullName} onPress={() => {}} />
            ) : (
              <TouchableOpacity
                key={item.id}
                style={{
                    backgroundColor:Colors.offWhite,
                    marginHorizontal: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                    borderRadius: 8,
                }}
              >
                <Avatar uri={item.uri} />
                <Text style={{marginTop: 18, color: Colors.darkBlue}}>{item.fullName}</Text>
              </TouchableOpacity>
            )}
          </>
        )}
      />
    </View>
  );
};

export default FriendsList;
