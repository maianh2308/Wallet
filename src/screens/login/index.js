import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import authenticationAPI from "../../api/authApi";
import { useDispatch } from "react-redux";
import { addAuth } from "../../redux/reducers/authReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { height } = Dimensions.get("window");
const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const handleLogin = async () => {
    try {
      const res = await authenticationAPI.HandleAuthentication(
        "/login",
        { username, password },
        "post"
      );
      dispatch(addAuth(res.data));
      await AsyncStorage.setItem('auth', username )
    } catch (err) {
      console.log(err);
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
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(username) => setUsername(username)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <Button title="Login" onPress={() => handleLogin()} />
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
export default Login;
