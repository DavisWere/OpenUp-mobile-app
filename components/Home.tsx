import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const navigateToCommunity = () => {
    navigation.navigate('Community');
  };

  const navigateToTherapists = () => {
    navigation.navigate('Therapists');
  };

  return (
    <View style={styles.container}>
      {/* Your Home Screen Content */}
      <Button title="Community" onPress={navigateToCommunity} />
      <Button title="Therapists" onPress={navigateToTherapists} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
