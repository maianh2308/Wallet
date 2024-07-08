import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";

const SendMoney = () => {
  const [recipient, setRecipient] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleTransfer = () => {
    // Thực hiện logic chuyển tiền ở đây
    console.log("Chuyển tiền:", { recipient, recipientName, amount, message });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chuyển Tiền</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Người nhận:</Text>
        <TextInput
          style={styles.input}
          placeholder="Số điện thoại hoặc email"
          value={recipient}
          onChangeText={setRecipient}
        />
        <TextInput
          style={styles.input}
          placeholder="Tên người nhận"
          value={recipientName}
          onChangeText={setRecipientName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Số tiền:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số tiền"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Lời nhắn (tùy chọn):</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập lời nhắn"
          value={message}
          onChangeText={setMessage}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleTransfer}>
        <Text style={styles.buttonText}>Chuyển tiền</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign:'center'
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 10,
      fontSize: 16,
      marginBottom: 10
    },
    button: {
      backgroundColor: Colors.yellow,
      borderRadius: 4,
      paddingVertical: 12,
      paddingHorizontal: 20,
    },
    buttonText: {
      color: Colors.blackText,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center'
    },
  });
export default SendMoney;
