import { View, Text, SafeAreaView, Image, Dimensions } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import styles from './styles'
import {Buttons} from '../../components'
const {height} = Dimensions.get("window")
const Welcome = ({ navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/artwork.png")} style={{ height, width: 120 }} resizeMode="cover" />
      <View style={styles.textContainer}>
        <View>
          <Image source={require("../../assets/logo.png")}  />
          <Text style={styles.eWalletText}>eWallet</Text>
          <Text style={{color: Colors.defaultText, fontSize: 16}}>{`Open An Account For Digital\nE-Wallet Solutions. Instant Payouts.\n\n Join For Free.`}</Text>
        </View>

        <View style= {styles.buttonContainer}>
          <Buttons.Default label= "Sig in" icon= "long-arrow-right" onPress= {() => navigation.navigate("@login")}/>
          <Buttons.Transparent label= "Create an Account" onPress= {() => navigation.navigate("@createAccount")}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
