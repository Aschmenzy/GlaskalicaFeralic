import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import ModalComponent from "./ModalComponent";

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

  useFocusEffect(
    useCallback(() => {
      setModalVisible(false);
      setSelectedOption("");
      console.log("HomeScreen reset on focus.");
    }, [])
  );

  const handleLevelSelect = (level: string) => {
    setModalVisible(false);
    router.push({
      pathname: "../pages/challangeScreen.tsx",
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


      <ModalComponent
        visible={modalVisible}
        onRequestClose={closeModal}
        onLevelSelect={handleLevelSelect}
        selectedOption={selectedOption}
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
