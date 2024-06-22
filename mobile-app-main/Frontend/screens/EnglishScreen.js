import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const EnglishScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>English Learning Materials</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>English Grammar</Text>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Parts of Speech</Text>
            <Text style={styles.materialContent}>
              This lesson covers the eight parts of speech: nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and interjections.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Sentence Structure</Text>
            <Text style={styles.materialContent}>
              Learn about different sentence structures, including simple, compound, complex, and compound-complex sentences.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Verb Tenses</Text>
            <Text style={styles.materialContent}>
              Explore the various verb tenses in English, including present, past, future, and their perfect forms.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Building Vocabulary Skills</Text>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Synonyms and Antonyms</Text>
            <Text style={styles.materialContent}>
              Learn about synonyms and antonyms, and how they can help you expand your vocabulary and understand the nuances of meaning.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Context Clues</Text>
            <Text style={styles.materialContent}>
              Discover how to use context clues in a sentence to infer the meaning of unfamiliar words.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Roots, Prefixes, and Suffixes</Text>
            <Text style={styles.materialContent}>
              Study common roots, prefixes, and suffixes to help you decipher the meaning of new words and build your vocabulary.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reading Comprehension Techniques</Text>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Identifying Main Ideas</Text>
            <Text style={styles.materialContent}>
              Learn techniques for identifying the main ideas and key points in a passage.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Supporting Details</Text>
            <Text style={styles.materialContent}>
              Discover how to find and analyze supporting details that reinforce the main ideas in a text.
            </Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Making Inferences</Text>
            <Text style={styles.materialContent}>
              Practice making inferences based on information provided in the text, and learn how to draw logical conclusions.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EnglishScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
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

