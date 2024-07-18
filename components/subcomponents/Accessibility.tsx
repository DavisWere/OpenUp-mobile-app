import React, { useContext } from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { AccessibilityContext } from "./AccessibilityContext";

const Accessibility = ({ visible, onClose }) => {
  const {
    fontSize,
    setFontSize,
    isHighContrast,
    toggleHighContrast,
    screenReaderEnabled,
    toggleScreenReader,
  } = useContext(AccessibilityContext);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Accessibility Settings</Text>

          <View style={styles.setting}>
            <Text style={styles.label}>Font Size</Text>
            <Slider
              style={styles.slider}
              minimumValue={10}
              maximumValue={30}
              value={fontSize}
              onValueChange={(value) => setFontSize(value)}
              minimumTrackTintColor="#00707a"
              maximumTrackTintColor="#000000"
              thumbTintColor="#00707a"
            />
            <Text style={styles.sliderValue}>{fontSize}</Text>
          </View>

          <View style={styles.setting}>
            <Text style={styles.label}>High Contrast</Text>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                isHighContrast && styles.toggleButtonActive,
              ]}
              onPress={toggleHighContrast}
            >
              <Text style={styles.toggleButtonText}>
                {isHighContrast ? "On" : "Off"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.setting}>
            <Text style={styles.label}>Screen Reader</Text>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                screenReaderEnabled && styles.toggleButtonActive,
              ]}
              onPress={toggleScreenReader}
            >
              <Text style={styles.toggleButtonText}>
                {screenReaderEnabled ? "On" : "Off"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
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
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  setting: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  sliderValue: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
  toggleButton: {
    backgroundColor: "#00707a",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  toggleButtonActive: {
    backgroundColor: "#ff7f7f",
  },
  toggleButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: "#dff2ff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
});

export default Accessibility;
