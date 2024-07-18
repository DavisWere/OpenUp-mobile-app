import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

const Wallet = ({ isVisible, closeModal }) => {
  // Dummy data for transactions and balance (replace with actual data retrieval logic)
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Credit", amount: 200, date: "2024-07-18" },
    { id: 2, type: "Debit", amount: 50, date: "2024-07-17" },
    { id: 3, type: "Credit", amount: 100, date: "2024-07-16" },
  ]);

  const currentBalance = 500; // Dummy current balance (replace with actual balance retrieval logic)

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>Wallet Information</Text>
      <Text style={styles.balanceText}>Current Balance: Ksh {currentBalance}</Text>

      <Text style={styles.transactionTitle}>Past Transactions:</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={styles.transactionType}>{item.type}</Text>
            <Text style={styles.transactionAmount}>Ksh {item.amount}</Text>
            <Text style={styles.transactionDate}>{item.date}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 100,
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  balanceText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    color: "#000",
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 5,
  },
  transactionType: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  transactionDate: {
    fontSize: 12,
    color: "#777",
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Wallet;