import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import authenticationAPI from "../../api/authApi";
import { useDispatch } from "react-redux";
import { addAuth } from "../../redux/reducers/authReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { stringify } from "query-string/base";
const { height } = Dimensions.get("window");

const CreateAccount = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch()
  const createAccount = async () => {
    if (
      username.length == 0 ||
      password.length == 0 ||
      phoneNumber.length == 0 ||
      email.length == 0
    ) {
      alert("Require Field is Missing");
    } else {
      var data = {
        username: username,
        password: password,
        phoneNumber: phoneNumber,
        email: email,
      };
      try {
        const res = await authenticationAPI.HandleAuthentication(
          "/register",
          data,
          "post"
        );

        dispatch(addAuth(res.data));
        await AsyncStorage.setItem('auth', JSON.stringify(res.data))
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={require("../../assets/artwork.png")}
        style={{ height, width: 120 }}
        resizeMode="cover"
      />
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(username) => setUsername(username)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        />
        <Button title="Create" onPress={() => createAccount()} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
export default CreateAccount;
