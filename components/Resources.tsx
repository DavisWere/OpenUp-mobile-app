import { useState, useEffect } from "react";
import React = require("react");
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Linking,
} from "react-native";
import axios from "axios";

const API_KEY = "AIzaSyD2o-pVOO4d3DfIedgPZ2ihgJBt-9W9v-Q";

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState("Books");
  const [books, setBooks] = useState([]);
  const [videos, setVideos] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (selectedResource === "Books") {
      fetchBooks();
    } else if (selectedResource === "Videos") {
      fetchVideos();
    }
  }, [selectedResource, filter]);

  const fetchBooks = async () => {
    let topics = [];
    switch (filter) {
      case "All":
        topics = getRandomTopics(9); // Fetch books from 9 random topics
        break;
      case "Recommended":
        topics = [
          "finding happiness",
          "building confidence",
          "mental wellness",
        ];
        break;
      default:
        topics = [filter.toLowerCase()];
    }

    try {
      const responses = await Promise.all(
        topics.map((topic) =>
          axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${topic}&key=${API_KEY}`
          )
        )
      );
      const booksData = responses.flatMap((response) => response.data.items);
      setBooks(booksData);
    } catch (error) {
      console.error("Error fetching books: ", error);
    }
  };

  const fetchVideos = async () => {
    let topics = [];
    switch (filter) {
      case "All":
        topics = getRandomTopics(3); // Fetch videos from 3 random topics
        break;
      case "Recommended":
        topics = [
          "finding happiness",
          "building confidence",
          "mental wellness",
        ];
        break;
      default:
        topics = [filter.toLowerCase()];
    }

    try {
      const responses = await Promise.all(
        topics.map((topic) =>
          axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
              part: "snippet",
              q: topic,
              type: "video",
              maxResults: 10,
              key: API_KEY,
            },
          })
        )
      );
      const videosData = responses.flatMap((response) => response.data.items);
      setVideos(videosData);
    } catch (error) {
      console.error("Error fetching videos: ", error);
    }
  };

  const openBookUrl = async (url) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error("Error opening book URL: ", error);
    }
  };

  const openVideoUrl = async (videoId) => {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error("Error opening video URL: ", error);
    }
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const getRandomTopics = (count) => {
    const topics = [
      "depression",
      "happiness",
      "confidence",
      "anxiety",
      "mindfulness",
      "stress management",
      "self-care",
      "positive thinking",
      "emotional resilience",
    ];
    const randomTopics = [];
    for (let i = 0; i < count; i++) {
      const randomTopic = topics[Math.floor(Math.random() * topics.length)];
      if (!randomTopics.includes(randomTopic)) {
        randomTopics.push(randomTopic);
      }
    }
    return randomTopics;
  };

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={styles.resourceChoices}>
        <Pressable
          style={[
            styles.resourceChoice,
            selectedResource === "Books" && styles.selectedResource,
          ]}
          onPress={() => setSelectedResource("Books")}
        >
          <Text style={styles.resourceText}>Books</Text>
        </Pressable>
        <Pressable
          style={[
            styles.resourceChoice,
            selectedResource === "Videos" && styles.selectedResource,
          ]}
          onPress={() => setSelectedResource("Videos")}
        >
          <Text style={styles.resourceText}>Videos</Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.itemChoices}
      >
        <Text
          style={[styles.itemChoice, filter === "All" && styles.selectedFilter]}
          onPress={() => handleFilterChange("All")}
        >
          All
        </Text>
        <Text
          style={[
            styles.itemChoice,
            filter === "Recommended" && styles.selectedFilter,
          ]}
          onPress={() => handleFilterChange("Recommended")}
        >
          Recommended
        </Text>
        <Text
          style={[
            styles.itemChoice,
            filter === "Depression" && styles.selectedFilter,
          ]}
          onPress={() => handleFilterChange("Depression")}
        >
          Depression
        </Text>
        <Text
          style={[
            styles.itemChoice,
            filter === "Happiness" && styles.selectedFilter,
          ]}
          onPress={() => handleFilterChange("Happiness")}
        >
          Happiness
        </Text>
        <Text
          style={[
            styles.itemChoice,
            filter === "Confidence" && styles.selectedFilter,
          ]}
          onPress={() => handleFilterChange("Confidence")}
        >
          Confidence
        </Text>
        <Text
          style={[
            styles.itemChoice,
            filter === "Anxiety" && styles.selectedFilter,
          ]}
          onPress={() => handleFilterChange("Anxiety")}
        >
          Anxiety
        </Text>
        <Text
          style={[
            styles.itemChoice,
            filter === "Mindfulness" && styles.selectedFilter,
          ]}
          onPress={() => handleFilterChange("Mindfulness")}
        >
          Mindfulness
        </Text>
        <Text
          style={[
            styles.itemChoice,
            filter === "Stress Management" && styles.selectedFilter,
          ]}
          onPress={() => handleFilterChange("Stress Management")}
        >
          Stress Management
        </Text>
        <Text
          style={[
            styles.itemChoice,
            filter === "Self-care" && styles.selectedFilter,
          ]}
          onPress={() => handleFilterChange("Self-care")}
        >
          Self-care
        </Text>
        <Text
          style={[
            styles.itemChoice,
            filter === "Positive Thinking" && styles.selectedFilter,
          ]}
          onPress={() => handleFilterChange("Positive Thinking")}
        >
          Positive Thinking
        </Text>
        <Text
          style={[
            styles.itemChoice,
            filter === "Emotional Resilience" && styles.selectedFilter,
          ]}
          onPress={() => handleFilterChange("Emotional Resilience")}
        >
          Emotional Resilience
        </Text>
      </ScrollView>

      {selectedResource === "Books" && (
        <View style={styles.bookList}>
          {books.map((book) => (
            <Pressable
              key={book.id}
              style={styles.bookCard}
              onPress={() => openBookUrl(book.volumeInfo.previewLink)}
            >
              <Image
                source={{ uri: book.volumeInfo.imageLinks?.thumbnail }}
                style={styles.bookImage}
              />
              <Text style={styles.bookTitle}>{book.volumeInfo.title}</Text>
            </Pressable>
          ))}
        </View>
      )}

      {selectedResource === "Videos" && (
        <View style={styles.videoList}>
          {videos.map((video) => (
            <Pressable
              key={video.id.videoId}
              style={styles.videoCard}
              onPress={() => openVideoUrl(video.id.videoId)}
            >
              <Image
                source={{ uri: video.snippet.thumbnails.high.url }}
                style={styles.bookImage}
              />
              <Text style={styles.videoTitle}>{video.snippet.title}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    paddingVertical: 15,
  },
  resourceChoices: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  resourceChoice: {
    padding: 10,
  },
  selectedResource: {
    borderBottomColor: "#00707a",
    borderBottomWidth: 3,
  },
  resourceText: {
    fontSize: 20,
    fontWeight: "500",
  },
  itemChoices: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  itemChoice: {
    fontSize: 15,
    backgroundColor: "#dff2ff",
    borderColor: "#00707a",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    textAlign: "center",
    borderRadius: 15,
  },
  selectedFilter: {
    backgroundColor: "#00707a",
    color: "#fff",
  },
  bookList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
  },
  bookCard: {
    margin: 5,
    width: "45%",
    height: 250,
    borderColor: "#f5f5f5",
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  bookImage: {
    width: "100%",
    height: "80%",
    resizeMode: "cover",
  },
  bookTitle: {
    textAlign: "center",
    padding: 5,
    fontSize: 16,
  },
  videoList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
  },
  videoCard: {
    margin: 5,
    width: "45%",
    height: 250,
    borderColor: "#f5f5f5",
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  videoTitle: {
    textAlign: "center",
    padding: 5,
    fontSize: 16,
  },
});

export default Resources;
