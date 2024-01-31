import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeholderImageSource, imageSelected }) {
  const ImageSource = imageSelected
    ? { uri: imageSelected }
    : placeholderImageSource;
  return <Image source={ImageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
