import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Avatar from "./Avatars/Menu";
import helpers from "../helpers";
import Colors from "../constants/Colors";
import NavigationList from "./Lists/NavigationList";
import LogOut from "./Buttons/TransparentWithIcon";

const height = Dimensions.get("window");
const CustomDrawer = () => {
  const user = helpers.genActiveUser();
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <View style={styles.userBox}>
            <Avatar uri={user.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.userText}>{user.fullName}</Text>
              <Text style={styles.locationText}>{user.location}</Text>
            </View>
          </View>
        </View>
        <NavigationList />
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 50,
  },
  userBox: {
    backgroundColor: Colors.white,
    paddingVertical: 30,
    flexDirection: "row",
    borderBottomRightRadius: 60,
    alignItems: "center",
    width: 250,
  },
  userText: {
    fontWeight: "700",
    color: Colors.blackText,
  },
  locationText: {
    fontSize: 10,
    marginTop: 4,
    color: Colors.darkBlue,
  },
  bottomContent: {
    position: "absolute",
    top: height - 160,
    paddingHorizontal: 20,
  },
});

export default CustomDrawer;
