import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from "react-native";

export default function HomeScreen() {
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

  const handleLevelSelect = (level: string) => {
    console.log(`Selected ${selectedOption} with level ${level}`);
    closeModal();
    // Add navigation logic here based on the selected level and option
  };
  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      style={styles.container}
    >
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
    <TouchableOpacity style={styles.modalButton}>
      <Text style={styles.modalButtonText}>3 glasa</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.modalButton}>
      <Text style={styles.modalButtonText}>4 glasa (pravilna izmjena)</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.modalButton}>
      <Text style={styles.modalButtonText}>4 glasa (konsonantske)</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.modalButton}>
      <Text style={styles.modalButtonText}>5 glasa</Text>
    </TouchableOpacity>
  </View>

  {/* Full-Width Green Button */}
  <TouchableOpacity style={styles.fullWidthButton}>
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
    marginBottom: 20,
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
    padding: 7,
    marginVertical: 5,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },
  fullWidthButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: "100%", 
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontSize: 18,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "red",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
  },
});