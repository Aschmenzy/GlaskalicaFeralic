import React, { useState } from "react";
import { useFocusEffect, useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import VoiceLevelModal from "./VoiceLevelModal"; // Import the new modal component

export default function HomeScreen() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedOption("");
  };

  // Reset state when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      setModalVisible(false);
      setSelectedOption("");
    }, [])
  );

  const handleLevelSelect = (level: string) => {
    // Navigate to Challenge Screen with selected type and level
    setModalVisible(false);
    router.push({
      pathname: "/pages/challengeScreen",
      params: {
        type: selectedOption,
        level: level,
      },
    });
  };

  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      style={styles.container}
    >
      {/* Return Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.returnButton}
      >
        <Text style={styles.returnButtonText}>Povratak</Text>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.tekst}>Izaberi broj nedostajućih</Text>
        <Text style={styles.tekst}>glasova</Text>
      </View>

      <TouchableOpacity
        onPress={() => handleOptionPress("Prvi Glas")}
        style={[styles.button, styles.button1]}
      >
        <Text style={styles.buttonText}>Prvi Glas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleOptionPress("Zadnji Glas")}
        style={[styles.button, styles.button2]}
      >
        <Text style={styles.buttonText}>Zadnji Glas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleOptionPress("Svi Glasovi")}
        style={[styles.button, styles.button3]}
      >
        <Text style={styles.buttonText}>Svi Glasovi</Text>
      </TouchableOpacity>

      <VoiceLevelModal
        visible={modalVisible}
        onClose={closeModal}
        onLevelSelect={handleLevelSelect}
      />
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
    borderColor: "white",
  },
  button2: {
    borderColor: "grey",
  },
  button3: {
    borderColor: "hotpink",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
  },
  returnButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "#FF5733",
    padding: 10,
    borderRadius: 10,
  },
  returnButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
