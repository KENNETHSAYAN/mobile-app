import React from 'react';
import { View, Text, Image, Button, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingPage = () => {
  const navigation = useNavigation(); // Access navigation object

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image source={require('../assets/logo.png')} style={styles.heroImage} />
        <Text style={styles.heroTitle}>Welcome to Our Learnify!</Text>
        <Text style={styles.heroSubtitle}>Your one-stop online library for education,
        Your Gateway to a World of Knowledge.</Text>
        <Button
          title="Get Started" 
          onPress={() => navigation.navigate('login')}
          style={styles.heroButton}/>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  hero: {
    alignItems: 'center',
    marginBottom: 40,
  },
  heroImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginTop: 50,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  heroSubtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  heroButton: {
    backgroundColor: '#45b6fe',
    padding: 15,
    borderRadius: 20,
    width: 150, // Adjust width as needed (e.g., in pixels)
    height: 50, // Adjust height as needed (e.g., in pixels)
  },
});

export default LandingPage;