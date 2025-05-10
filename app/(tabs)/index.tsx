import { StyleSheet, View } from "react-native";
import Button from "../../components/Button";
import ImageViewer from "../../components/ImageViewer";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>
      <View>
        <Button label="Choose a photo"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#25292e"
  },
 text: {
  color: "white"
 },
 imageContainer: {
  flex: 1,
 }
})
