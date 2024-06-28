import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const ScienceScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Science Learning Materials</Text>

        {/* Science Concepts Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Science Concepts</Text>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Introduction to Science Concepts</Text>
            <Text style={styles.materialContent}>
              This lesson provides an introduction to the scientific method, the core process of scientific inquiry.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Physics Fundamentals</Text>
            <Text style={styles.materialContent}>
              Learn about the basic principles of physics, including force, motion, energy, and how they interact in the physical world.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Basic Chemistry Concepts</Text>
            <Text style={styles.materialContent}>
              Understand the core concepts of chemistry, such as atoms, molecules, chemical reactions, and the periodic table.
            </Text>
          </View>
        </View>

        {/* The Scientific Method Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>The Scientific Method</Text>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Overview</Text>
            <Text style={styles.materialContent}>
              Explore the steps involved in the scientific method: observation, hypothesis, experiment, analysis, and conclusion.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Formulating Hypotheses</Text>
            <Text style={styles.materialContent}>
              Learn how to develop a testable hypothesis based on initial observations and background research.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Conducting Experiments</Text>
            <Text style={styles.materialContent}>
              Discover the best practices for designing and conducting experiments, including variable control and data collection.
            </Text>
          </View>
        </View>

        {/* States of Matter Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>States of Matter</Text>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Introduction to States of Matter</Text>
            <Text style={styles.materialContent}>
              Learn about the different states of matter (solid, liquid, gas) and their properties.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Plasma State</Text>
            <Text style={styles.materialContent}>
              Understand the fourth state of matter, plasma, which is a hot, ionized gas found in places like stars and fluorescent lights.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Phase Transitions</Text>
            <Text style={styles.materialContent}>
              Explore how matter transitions between different states, such as melting, freezing, condensation, and evaporation.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScienceScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    padding: 20,
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

