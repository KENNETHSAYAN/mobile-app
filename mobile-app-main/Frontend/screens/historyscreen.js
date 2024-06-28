import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const HistoryScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>History Learning Materials</Text>

        {/* World History Overview Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>World History Overview</Text>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Major Historical Events</Text>
            <Text style={styles.materialContent}>
              This lesson covers major historical events that have shaped the world, from ancient times to the modern era.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Important Civilizations</Text>
            <Text style={styles.materialContent}>
              Learn about the most influential civilizations in history, including their contributions to culture, technology, and governance.
            </Text>
          </View>
        </View>

        {/* Ancient Civilizations Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ancient Civilizations</Text>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Mesopotamia</Text>
            <Text style={styles.materialContent}>
              Explore the cradle of civilization in Mesopotamia, including its early writing systems, laws, and city-states.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Ancient Egypt</Text>
            <Text style={styles.materialContent}>
              Learn about the history and culture of Ancient Egypt, including its pharaohs, pyramids, and contributions to art and science.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Ancient Greece</Text>
            <Text style={styles.materialContent}>
              Delve into the civilization of Ancient Greece, known for its philosophy, democracy, and achievements in art and architecture.
            </Text>
          </View>
        </View>

        {/* The Middle Ages Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>The Middle Ages</Text>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Feudalism</Text>
            <Text style={styles.materialContent}>
              Understand the system of feudalism that dominated medieval Europe, including the roles of lords, vassals, and serfs.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>The Crusades</Text>
            <Text style={styles.materialContent}>
              Learn about the series of religious wars known as the Crusades, their causes, key events, and impact on Europe and the Middle East.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>The Black Death</Text>
            <Text style={styles.materialContent}>
              Explore the devastating impact of the Black Death, a pandemic that swept through Europe in the 14th century.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  materialItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  materialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  materialContent: {
    fontSize: 16,
  },
});

