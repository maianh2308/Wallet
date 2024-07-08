import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.white,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 15,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    width: "100%"
  },
  eWalletText: {
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 28,
    color: Colors.blackText,
  },
});
export default styles;
