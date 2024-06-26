import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import image from '../assets/images/fantasy.jpg';
import image1 from '../assets/images/cover.jpg';

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState('Books');

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={styles.resourceChoices}>
        <Pressable
          style={[
            styles.resourceChoice,
            selectedResource === 'Books' && styles.selectedResource,
          ]}
          onPress={() => setSelectedResource('Books')}
        >
          <Text style={styles.resourceText}>Books</Text>
        </Pressable>
        <Pressable
          style={[
            styles.resourceChoice,
            selectedResource === 'Videos' && styles.selectedResource,
          ]}
          onPress={() => setSelectedResource('Videos')}
        >
          <Text style={styles.resourceText}>Videos</Text>
        </Pressable>
      </View>

      {selectedResource === 'Books' && (
        <>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.itemChoices}>
            <Text style={styles.itemChoice}>All</Text>
            <Text style={styles.itemChoice}>Recommended</Text>
            <Text style={styles.itemChoice}>Wellness</Text>
            <Text style={styles.itemChoice}>Mindfulness</Text>
            <Text style={styles.itemChoice}>Mindfulness</Text>
            <Text style={styles.itemChoice}>Mindfulness</Text>
          </ScrollView>
          <View style={styles.bookList}>
            <View style={styles.bookCard}>
              <Image source={image} style={styles.bookImage} />
            </View>
            <View style={styles.bookCard}>
              <Image source={image1} style={styles.bookImage} />
            </View>
            <View style={styles.bookCard}>
              <Image source={image1} style={styles.bookImage} />
            </View>
            <View style={styles.bookCard}>
              <Image source={image} style={styles.bookImage} />
            </View>
            <View style={styles.bookCard}>
              <Image source={image} style={styles.bookImage} />
            </View>
            <View style={styles.bookCard}>
              <Image source={image1} style={styles.bookImage} />
            </View>
            <View style={styles.bookCard}>
              <Image source={image1} style={styles.bookImage} />
            </View>
            <View style={styles.bookCard}>
              <Image source={image} style={styles.bookImage} />
            </View>
          </View>
        </>
      )}

      {selectedResource === 'Videos' && (
        <>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.itemChoices}>
            <Text style={styles.itemChoice}>All</Text>
            <Text style={styles.itemChoice}>Recommended</Text>
            <Text style={styles.itemChoice}>Wellness</Text>
            <Text style={styles.itemChoice}>Mindfulness</Text>
            <Text style={styles.itemChoice}>Mindfulness</Text>
            <Text style={styles.itemChoice}>Mindfulness</Text>
          </ScrollView>
        <View style={styles.videoList}>
          <View style={styles.videoCard}>
            <Image source={image1} style={styles.bookImage} />
          </View>
          <View style={styles.videoCard}>
            <Image source={image} style={styles.bookImage} />
          </View>
          <View style={styles.videoCard}>
            <Image source={image} style={styles.bookImage} />
          </View>
          <View style={styles.videoCard}>
            <Image source={image1} style={styles.bookImage} />
          </View>
          <View style={styles.videoCard}>
            <Image source={image1} style={styles.bookImage} />
          </View>
          <View style={styles.videoCard}>
            <Image source={image} style={styles.bookImage} />
          </View>
          <View style={styles.videoCard}>
            <Image source={image} style={styles.bookImage} />
          </View>
          <View style={styles.videoCard}>
            <Image source={image1} style={styles.bookImage} />
          </View>
        </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    paddingVertical: 15,
  },
  resourceChoices: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 3,
  },
  resourceChoice: {
    padding: 3,
  },
  selectedResource: {
    borderBottomColor: '#f9c70c',
    borderBottomWidth: 3,
  },
  resourceText: {
    fontSize: 20,
    fontWeight: '500',
  },
  itemChoices: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  itemChoice: {
    fontSize: 15,
    backgroundColor: '#dff2ff',
    borderColor: '#f9c70c',
    borderWidth: .5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    textAlign: 'center',
    borderRadius: 15,
  },
  bookList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  bookCard: {
    margin: 5,
    width: '45%',
    height: 200,
    borderColor: '#f5f5f5',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  videoList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  videoCard: {
    margin: 5,
    width: '45%',
    height: 200,
    borderColor: '#f5f5f5',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bookImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Resources;
