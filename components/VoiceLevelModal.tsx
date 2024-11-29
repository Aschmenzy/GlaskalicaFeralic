import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";

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
  const isWeb = Platform.OS === "web";

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View
          style={[
            styles.modalContent,
            {
              width: isWeb ? "60%" : "100%",
              maxHeight: isWeb ? "90%" : "100%",
            },
          ]}
        >
          <Text style={styles.modalTitle}>Izaberite level:</Text>

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

            <TouchableOpacity
              onPress={() => onLevelSelect("5_glasa_konsonantske")}
              style={[styles.modalButton, styles.fullWidthButton]}
            >
              <Text style={styles.modalButtonText}>5 glasa (konsonantske)</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
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
    backgroundColor: "#FFFFF1",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
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
    backgroundColor: "#87ceeb",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: "48%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  fullWidthButton: {
    width: "100%",
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
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default VoiceLevelModal;
