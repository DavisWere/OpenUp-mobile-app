import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  Pressable,
  Alert,
} from "react-native";

const Games = () => {
  // Sample data for game cards (with different images)
  const gamesData = [
    {
      id: "1",
      title: "Game 1",
      image: require("../../assets/images/wrestler.png"),
    },
    {
      id: "2",
      title: "Game 2",
      image: require("../../assets/images/puzzle.png"),
    },
    {
      id: "3",
      title: "Game 3",
      image: require("../../assets/images/spaceship.png"),
    },
    {
      id: "4",
      title: "Game 4",
      image: require("../../assets/images/tictactoe.png"),
    },
  ];

  // Function to render each game card
  const renderGameCard = ({ item }) => (
    <View style={styles.gameCard}>
      <ImageBackground source={item.image} style={styles.imageBackground}>
        <Pressable
          onPress={() =>
            Alert.alert("Heyy user!!", "Games will be added soon 🤩")
          }
        >
          <Text style={styles.playText}>Play</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );

  return (
    <View>
      <Text style={styles.mainTitle}>Featured Games</Text>
      <FlatList
        data={gamesData}
        renderItem={renderGameCard}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={styles.gameCards}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 7,
  },
  gameCards: {
    paddingHorizontal: 10,
    marginVertical: 7,
  },
  gameCard: {
    height: 130,
    width: 150,
    marginHorizontal: 5,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 2,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  playText: {
    fontSize: 15,
    fontWeight: "500",
    borderRadius: 10,
    borderColor: "#00707a",
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 10,
    margin: 5,
    color: "#333",
    backgroundColor: "#dff2ff",
    textAlign: "center",
    color: "#333",
    backgroundColor: "#dff2ff",
    textAlign: "center",
  },
});

export default Games;
