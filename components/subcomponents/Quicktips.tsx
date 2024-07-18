import React from "react";
import { View, FlatList, Image, Text, StyleSheet } from "react-native";

// Mock data (replace with your actual data)
const tipsData = [
  {
    id: "1",
    title: "Managing Time Better",
    image: require("../../assets/images/time.jpg"),
  },
  {
    id: "2",
    title: "Better Diet Choices",
    image: require("../../assets/images/diet.png"),
  },
  {
    id: "3",
    title: "Drink Plenty of Water",
    image: require("../../assets/images/water.png"),
  },
  {
    id: "4",
    title: "Staying Active",
    image: require("../../assets/images/active.png"),
  },
  {
    id: "5",
    title: "Why Sleep Matters",
    image: require("../../assets/images/sleep.png"),
  },
  {
    id: "6",
    title: "Mindfulness Practices",
    image: require("../../assets/images/mindfulness.png"),
  },
];

const Quicktips = () => {
  // Function to render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <Text style={styles.mainTitle}>Quick Tips</Text>
      <FlatList
        data={tipsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlistContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    paddingVertical: 7,
    marginHorizontal: 7,
  },
  itemContainer: {
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: "#fff",
    elevation: 2,
    height: 130,
    width: 150,
  },
  image: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    padding: 7,
    textAlign: "center",
  },
  mainTitle: {
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
});

export default Quicktips;
