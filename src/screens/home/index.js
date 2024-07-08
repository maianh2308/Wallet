import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  DrawerLayoutAndroid,
  Button,
} from "react-native";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import helpers from "../../helpers";
import CustomDrawer from "../../components/CustomDrawer";
import { Buttons, Header, Lists, Separators } from "../../components";
import Colors from "../../constants/Colors";
import services from "../../mock/services.json";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, removeAuth } from "../../redux/reducers/authReducer";
import authenticationAPI from "../../api/authApi";
const buttonAdd = {
  id: "1",
  fullName: "template",
  avatar: "",
};
const Home = ({ navigation }) => {
  const accountBalance = helpers.genAccountBalance(100, 12000);
  const friends = helpers.genFriendsList();
  const myref = useRef();
  const auth = useSelector(authSelector);
  const username = auth.username;
  const navigationView = () => (
    <>
      <CustomDrawer />
    </>
  );
  const getUser = async () => {
    try {
      const res = await authenticationAPI.HandleAuthentication(
        "/getUser",
        { username },
        "get"
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <DrawerLayoutAndroid ref={myref} renderNavigationView={navigationView}>
        <Header.Default openDrawer={() => myref.current.openDrawer()} />
        <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
          <Separators.Default label="Account OverView" />
          <View style={styles.balanceContainer}>
            <View>
              <Text style={styles.currentAmountValueText}>
                {accountBalance}
              </Text>
              <Text style={styles.currentAmountLabelText}>Current Balance</Text>
            </View>
            <Buttons.AddNew onPress={() => {}} />
          </View>
          <Separators.Default label="Send Money" />
          <Lists.FriendsList list={[buttonAdd, ...friends]} />
          <Separators.Default label="Services" />
          <Lists.ServicesList list={services} />
        </ScrollView>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};

export default Home;
