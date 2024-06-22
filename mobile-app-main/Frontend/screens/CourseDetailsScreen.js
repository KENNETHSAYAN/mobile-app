import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const CourseDetailsScreen = ({ route }) => {
  const { courseId } = route.params; // Get course ID from navigation
  const navigation = useNavigation(); // Get navigation object

  // Store materials in a single state object for better organization
  const [materials, setMaterials] = useState({
    math: [],
    science: [],
    history: [],
    english: [],
  });

  useEffect(() => {
    const setCourseMaterials = () => {
      switch (courseId) {
        case 1:
          setMaterials({
            math: [
              { title: "Introduction to Algebra", content: "This lesson covers the basics of algebra, including variables, expressions, equations, and how to solve them." },
              { title: "Basic Geometry Concepts", content: "Explore points, lines, angles, shapes, and their properties in this introductory geometry lesson." },
              { title: "Pythagorean Theorem", content: "Learn about the Pythagorean Theorem, a fundamental formula in geometry used to find the length of sides in right triangles." },
            ],
            science: [],
            history: [],
            english: [],
          });
          break;
        case 2:
          setMaterials({
            math: [],
            science: [
              { title: "Science Concepts", content: "This lesson provides an introduction to the scientific method, the core process of scientific inquiry." },
              { title: "The Scientific Method", content: "Explore the steps involved in the scientific method: observation, hypothesis, experiment, analysis, and conclusion." },
              { title: "States of Matter", content: "Learn about the different states of matter (solid, liquid, gas) and their properties." },
            ],
            history: [],
            english: [],
          });
          break;
        case 3:
          setMaterials({
            math: [],
            science: [],
            history: [
              { title: "World History Overview", content: "This lesson provides a broad survey of major historical events and civilizations across the globe." },
              { title: "Ancient Civilizations", content: "Delve deeper into early societies like Mesopotamia, Egypt, Greece, and Rome, exploring their cultures, achievements, and downfalls." },
              { title: "The Middle Ages", content: "Learn about the historical period following the fall of the Roman Empire, including the rise of feudalism, the Crusades, and the Black Death." },
            ],
            english: [],
          });
          break;
        case 4:
          setMaterials({
            math: [],
            science: [],
            history: [],
            english: [
              {
                title: "Introduction to English Grammar",
                content:
                  "This lesson covers the fundamentals of English grammar, including parts of speech, sentence structure, verb tenses, and punctuation."
              },
              {
                title: "Building Vocabulary Skills",
                content:
                  "Learn strategies for expanding your vocabulary and using words effectively in your writing and speaking."
              },
              {
                title: "Reading Comprehension Techniques",
                content:
                  "Explore techniques for improving your reading comprehension, including identifying main ideas, supporting details, and making inferences."
              },
              // Add more English course materials here
            ],
          });
          break;
        default:
          console.warn("Unknown course ID:", courseId);
          break;
      }
    };

    setCourseMaterials();
  }, [courseId]);

  // Access specific materials based on course using materials object
  const courseMaterials = materials[courseId === 1 ? 'math' : courseId === 2 ? 'science' : courseId === 3 ? 'history' : 'english'];

  // Function to handle navigation to Mathematics Learning Materials
  const handleMathematics = () => {
    navigation.navigate('Math');
  };

  // Dummy handlers for Learn More buttons
  const handleScience = () => {
    navigation.navigate('Science');
  };

  const handleHistory = () => {
    navigation.navigate('History');
  };

  const handleEnglish = () => {
    navigation.navigate('English');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.courseTitle}>Course Learning Materials</Text>
        {courseMaterials.map((material) => (
          <View key={material.title} style={styles.materialItem}>
            <Text style={styles.materialTitle}>{material.title}</Text>
            <Text style={styles.materialContent}>{material.content}</Text>
          </View>
        ))}
        {courseId === 1 && (
          <TouchableOpacity onPress={handleMathematics}>
            <Text style={styles.learnMoreButton}>Learn More</Text>
          </TouchableOpacity>
        )}
        {courseId === 2 && (
          <TouchableOpacity onPress={handleScience}>
            <Text style={styles.learnMoreButton}>Learn More</Text>
          </TouchableOpacity>
        )}
        {courseId === 3 && (
          <TouchableOpacity onPress={handleHistory}>
            <Text style={styles.learnMoreButton}>Learn More</Text>
          </TouchableOpacity>
        )}
        {courseId === 4 && (
          <TouchableOpacity onPress={handleEnglish}>
            <Text style={styles.learnMoreButton}>Learn More</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CourseDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  courseTitle: {
    fontSize: 24,
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
  learnMoreButton: {
    backgroundColor: 'blue', // Example blue color, can be customized
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    alignSelf: 'center',
    color: 'white',
  },
});
