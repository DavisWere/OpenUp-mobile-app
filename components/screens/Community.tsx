import React = require("react");
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Community = () => {
  const communityPosts = [
    {
      id: 1,
      title: "First Community Post",
      content: "This is the content of the first post.",
    },
    {
      id: 2,
      title: "Second Community Post",
      content: "This is the content of the second post.",
    },
    {
      id: 3,
      title: "Third Community Post",
      content: "This is the content of the third post.",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Community</Text>
      <ScrollView style={styles.postsContainer}>
        {communityPosts.map((post) => (
          <View key={post.id} style={styles.post}>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postContent}>{post.content}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.createNewPost}>
        <Text style={styles.createPostText}>Create New Post</Text>
        {/* new post */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  postsContainer: {
    flex: 1,
  },
  post: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  postContent: {
    fontSize: 16,
    color: "#333",
  },
  createNewPost: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#00707a",
    borderRadius: 8,
  },
  createPostText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Community;
