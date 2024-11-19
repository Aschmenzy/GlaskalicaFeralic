import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      style={styles.container}
    >
      <View style={styles.textContainer}>
        <Text style={styles.tekst}>Izaberi broj nedostajućih</Text>
        <Text style={styles.tekst}>glasova</Text>
      </View>

      <TouchableOpacity style={[styles.button, styles.button1]}>
        <Text style={styles.buttonText}>Jedan Glas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.button2]}>
        <Text style={styles.buttonText}>Više Glasova</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.button3]}>
        <Text style={styles.buttonText}>Svi Glasovi</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  tekst: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  button: {
    padding: 15,
    margin: 10,
    width: "35%",
    borderWidth: 4,
  },
  button1: {
    borderColor: "white", // Blue
  },
  button2: {
    borderColor: "grey", // Green
  },
  button3: {
    borderColor: "hotpink", // Red
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
  },
});
