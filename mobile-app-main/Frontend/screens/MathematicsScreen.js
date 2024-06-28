import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const MathematicsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Mathematics Learning Materials</Text>

        {/* Algebra Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Algebra</Text>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Example Problem 1:</Text>
            <Text style={styles.materialContent}>Solve the equation: 2x + 5 = 13</Text>
            <Text style={styles.solution}>Solution: Subtract 5 from both sides to isolate the variable. 2x = 8. Then, divide both sides by 2. x = 4.</Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Example Problem 2:</Text>
            <Text style={styles.materialContent}>Solve the system of equations: x + y = 10 and x - y = 2</Text>
            <Text style={styles.solution}>Solution: Add the two equations to eliminate y: (x + y) + (x - y) = 10 + 2, resulting in 2x = 12, so x = 6. Substitute x back into one of the original equations to find y: 6 + y = 10, so y = 4.</Text>
          </View>
        </View>

        {/* Basic Geometry Concepts Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic Geometry Concepts</Text>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Example Problem 1:</Text>
            <Text style={styles.materialContent}>Calculate the area of a rectangle with length 8 units and width 5 units.</Text>
            <Text style={styles.solution}>Solution: The area of a rectangle is calculated by multiplying its length by its width. So, Area = 8 * 5 = 40 square units.</Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Example Problem 2:</Text>
            <Text style={styles.materialContent}>Calculate the circumference of a circle with a radius of 7 units.</Text>
            <Text style={styles.solution}>Solution: The circumference of a circle is calculated using the formula C = 2πr. So, Circumference = 2 * π * 7 ≈ 44 units.</Text>
          </View>
        </View>

        {/* Pythagorean Theorem Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pythagorean Theorem</Text>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Example Problem 1:</Text>
            <Text style={styles.materialContent}>Find the length of the hypotenuse in a right triangle with legs of lengths 3 units and 4 units.</Text>
            <Text style={styles.solution}>Solution: According to the Pythagorean theorem, the square of the length of the hypotenuse (c) is equal to the sum of the squares of the lengths of the other two sides (a and b). So, c^2 = 3^2 + 4^2 = 9 + 16 = 25. Taking the square root of both sides, we get c = 5 units.</Text>
          </View>
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>Example Problem 2:</Text>
            <Text style={styles.materialContent}>A right triangle has one leg of 5 units and a hypotenuse of 13 units. Find the length of the other leg.</Text>
            <Text style={styles.solution}>Solution: Let the other leg be b. According to the Pythagorean theorem, 5^2 + b^2 = 13^2. So, 25 + b^2 = 169. Subtract 25 from both sides to get b^2 = 144. Taking the square root of both sides, we get b = 12 units.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MathematicsScreen;

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
    marginBottom: 5,
  },
  solution: {
    fontStyle: 'italic',
  },
});

