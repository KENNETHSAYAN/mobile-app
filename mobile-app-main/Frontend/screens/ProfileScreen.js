import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from "react-native";
import authentication from "../api/authentication";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = ({ navigation, route }) => {
  const [userData, setUserData] = useState(route.params ? route.params.userData : null);
  const [isEditing, setIsEditing] = useState(false);
  const [birthdateInput, setBirthdateInput] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await authentication.me();
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (!userData) {
      fetchUserData();
    }
  }, [userData]);

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "Yes", onPress: () => navigation.navigate("login") },
    ]);
  };

  const handleSaveProfile = async () => {
    try {
      console.log("Saving profile...");
      const updatedUserData = { ...userData, birthdate: birthdateInput }; // Include birthdate from input
      console.log("Updated user data:", updatedUserData);
      await authentication.updateProfile(updatedUserData);
      setIsEditing(false);
      setUserData(updatedUserData); // Update user data with birthdate
      Alert.alert("Profile Update", "Profile information saved successfully!");
      console.log("Profile saved successfully!");
    } catch (error) {
      console.error("Error saving profile:", error);
      Alert.alert("Profile Update", "An error occurred while saving the profile.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {userData ? (
          <>
            <View style={styles.profileHeader}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../assets/profile.jpg")}
                  style={[styles.logo, { borderRadius: 50, marginBottom: 10 }]}
                />
                {isEditing ? (
                  <TextInput
                    style={styles.profileNameInput}
                    value={`${userData.first_name} ${userData.last_name}`}
                    onChangeText={(text) => {
                      const [firstName, lastName] = text.split(' ');
                      setUserData({ ...userData, first_name: firstName, last_name: lastName });
                    }}
                  />
                ) : (
                  <Text style={styles.profileName}>{`${userData.first_name} ${userData.last_name}`}</Text>
                )}
              </View>
            </View>

            <Text style={styles.profileDetailLabel}>Email Address:</Text>
            <Text style={styles.profileDetailValue}>{userData.email}</Text>
            <Text style={styles.profileDetailLabel}>BirthDate:</Text>
            <Text style={styles.profileDetailValue}>{userData.birthdate}</Text>


            {isEditing && (
              <>
                <Text style={styles.profileDetailLabel}>First Name:</Text>
                <TextInput
                  style={styles.profileDetailInput}
                  value={userData.first_name}
                  onChangeText={(text) => setUserData({ ...userData, first_name: text })}
                />

                <Text style={styles.profileDetailLabel}>Last Name:</Text>
                <TextInput
                  style={styles.profileDetailInput}
                  value={userData.last_name}
                  onChangeText={(text) => setUserData({ ...userData, last_name: text })}
                />

                <Text style={styles.profileDetailLabel}>Birthdate:</Text>
                <TextInput
                  style={styles.profileDetailInput}
                  value={birthdateInput} // Use state to display and update birthdate
                  onChangeText={setBirthdateInput} // Update birthdate input value
                />
              </>
            )}

            <View style={styles.buttonContainer}>
              {isEditing ? (
                <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.button} onPress={() => setIsEditing(true)}>
                  <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity style={[styles.button, styles.buttonLogout]} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text>Loading user profile...</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeader: {
    marginBottom: 20,
    alignItems: "center", // Center items horizontally
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10, // Add margin to separate the image and text input
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileNameInput: {
    fontSize: 20,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "70%", // Adjust width to fit the input and the image properly
    
  },
  profileDetailLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profileDetailValue: {
    fontSize: 16,
    margin: 15
  },
  profileDetailInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "80%",
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#45b6fe",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    width: "80%",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  buttonLogout: {
    backgroundColor: "#ff3b30",
  },
});
