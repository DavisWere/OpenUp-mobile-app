import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput, Button } from 'react-native';

const Community = () => {
  const [communityPosts, setCommunityPosts] = useState([
    { id: 1, title: 'Daily Mental Health Tips', content: 'Start your day with a positive affirmation, practice mindfulness for 5 minutes, and remember to take breaks during work. These small steps can help improve your mental well-being.' },
    { id: 2, title: 'Join Our Upcoming Webinar', content: "We are hosting a webinar on 'Coping with Anxiety' this Friday at 3 PM. Join us to learn effective strategies and share your experiences. Register now!" },
    { id: 3, title: 'My Journey to Better Mental Health', content: "Hi everyone! I wanted to share my journey of overcoming depression. It's been a tough road, but with therapy and support, I'm doing much better. Let's support each other!" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  const handleCreatePost = () => {
    const newPost = {
      id: communityPosts.length + 1,
      title: newPostTitle,
      content: newPostContent,
    };
    setCommunityPosts([...communityPosts, newPost]);
    setModalVisible(false);
    setNewPostTitle('');
    setNewPostContent('');
  };

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
      <TouchableOpacity style={styles.createNewPost} onPress={() => setModalVisible(true)}>
        <Text style={styles.createPostText}>Create New Post</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Create New Post</Text>
            <TextInput
              style={styles.input}
              placeholder="Post Title"
              value={newPostTitle}
              onChangeText={setNewPostTitle}
            />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Post Content"
              value={newPostContent}
              onChangeText={setNewPostContent}
              multiline
            />
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button title="Create" onPress={handleCreatePost} />
            </View>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 8,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: '',
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  textArea: {
    height: 100,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 8,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  textArea: {
    height: 100,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Community;
