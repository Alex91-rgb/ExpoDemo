import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Expo Test</Text>
      <Link href={"/about"} style={styles.button}>
        Go to About Screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e"
  },
 text: {
  color: "white"
 },
 button: {
  fontSize: 20,
  textDecorationLine: "underline",
  color: "#fff",
 }
})
