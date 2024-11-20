import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from "react-native";

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
      useCallback(() => {
        setModalVisible(false);
        setSelectedOption("");
        console.log("HomeScreen reset on focus.");
      }, [])
    );

  const handleLevelSelect = (level: string) => {
    // Navigate to Challenge Screen with selected type and level
    setModalVisible(false);
    router.push({
      pathname: "/pages/challengeScreen",
      params: {
        type: selectedOption,
        level: level         
      }
    });
  };
  
  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      style={styles.container}
    >
      {/* Return Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.returnButton}>
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

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
  <Text style={styles.modalTitle}>Odaberi težinu:</Text>

  {/* Buttons in a Grid */}
<View style={styles.modalButtonContainer}>
  <TouchableOpacity
    onPress={() => handleLevelSelect("3_glasa")}
    style={styles.modalButton}
  >
    <Text style={styles.modalButtonText}>3 glasa</Text>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={() => handleLevelSelect("4_glasa_pravilna")}
    style={styles.modalButton}
  >
    <Text style={styles.modalButtonText}>4 glasa (pravilna izmjena)</Text>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={() => handleLevelSelect("4_glasa_konsonantske")}
    style={styles.modalButton}
  >
    <Text style={styles.modalButtonText}>4 glasa (konsonantske)</Text>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={() => handleLevelSelect("5_glasa")}
    style={styles.modalButton}
  >
    <Text style={styles.modalButtonText}>5 glasa</Text>
  </TouchableOpacity>
</View>

{/* Full-Width Green Button */}
<TouchableOpacity
  onPress={() => handleLevelSelect("5_glasa_konsonantske")}
  style={styles.fullWidthButton}
>
  <Text style={styles.modalButtonText}>5 glasa (konsonantske)</Text>
</TouchableOpacity>

  {/* Full-Width Red Close Button */}
  <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
    <Text style={styles.closeButtonText}>Zatvori</Text>
  </TouchableOpacity>
</View>
        </View>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "60%", 
    maxHeight: "90%", 
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  modalButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap", 
    justifyContent: "space-between",
    width: "100%", 
    marginBottom: 5, 
  },
  modalButton: {
    backgroundColor: "#4CAF50",
    padding: 10, // Adjust for consistent padding
    marginVertical: 5,
    borderRadius: 5,
    width: "48%", // Ensures buttons fit in the grid
    height: 70, // Add consistent height for all buttons
    alignItems: "center",
    justifyContent: "center", // Centers text vertically
  },
  fullWidthButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    height: 50,
    width: "100%", 
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontSize: 16, // Reduce font size slightly if needed
    textAlign: "center", // Center-align text
    flexWrap: "wrap", // Allow text to wrap
  },
  
  closeButton: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "red",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
  },// Styles for Return Button
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