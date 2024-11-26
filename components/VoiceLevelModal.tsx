import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";

interface VoiceLevelModalProps {
  visible: boolean;
  onClose: () => void;
  onLevelSelect: (level: string) => void;
}

const VoiceLevelModal: React.FC<VoiceLevelModalProps> = ({
  visible,
  onClose,
  onLevelSelect,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Odaberi težinu:</Text>

          {/* Buttons in a Grid */}
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              onPress={() => onLevelSelect("3_glasa")}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>3 glasa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onLevelSelect("4_glasa_pravilna")}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>
                4 glasa (pravilna izmjena)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onLevelSelect("4_glasa_konsonantske")}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>4 glasa (konsonantske)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onLevelSelect("5_glasa")}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>5 glasa</Text>
            </TouchableOpacity>
          </View>

          {/* Full-Width Green Button */}
          <TouchableOpacity
            onPress={() => onLevelSelect("5_glasa_konsonantske")}
            style={styles.fullWidthButton}
          >
            <Text style={styles.modalButtonText}>5 glasa (konsonantske)</Text>
          </TouchableOpacity>

          {/* Full-Width Red Close Button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Zatvori</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: "48%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 16,
    textAlign: "center",
    flexWrap: "wrap",
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
  },
});

export default VoiceLevelModal;
