import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import Colors from "../../constants/Colors";
import { Buttons } from "../../components";

const ReceiveMoney = () => {
  const [amount, setAmount] = useState("");

  const handleTransfer = () => {
    // Thực hiện logic chuyển tiền ở đây
    console.log("Chuyển tiền:", amount);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nạp Tiền</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Số Tiền:</Text>
        <View style={styles.amountContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nhập số tiền"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.button} onPress={handleTransfer}>
            <Text style={styles.buttonText}>Nạp Tiền</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Miễn phí nạp tiền qua tài khoản/ thẻ nội địa hoặc ứng dụng ngân hàng.
        </Text>
        <Text style={styles.infoText}>Xem chi tiết</Text>
      </View>
      <TouchableOpacity style={styles.underbutton} onPress={handleTransfer}>
        <Text style={styles.textUnderButton}>
          Nạp tiền bằng ngân hàng liên kết
        </Text>
      </TouchableOpacity>
      <Buttons.Transparent
        label="Chuyển khoản qua ứng dụng ngân hàng"
        onPress={() => console.log("hehe")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginRight: 10,
  },
  button: {
    backgroundColor: Colors.yellow,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: Colors.darkBlue,
    fontSize: 16,
    fontWeight: "bold",
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
  },
  paymentContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  paymentText: {
    fontSize: 16,
    marginBottom: 10,
  },
  underbutton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  textUnderButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ReceiveMoney;
