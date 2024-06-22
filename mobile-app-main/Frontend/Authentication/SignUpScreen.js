import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import authentication from "../api/authentication";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      setError(null);
      const response = await authentication.registration(
        first_name,
        last_name,
        email,
        password,
        confirmPassword
      );

      if (response.status === 200) {
        Alert.alert("You successfully Register", "Please check your Email");
        navigation.navigate("login", {
          userData: {
            first_name,
            last_name,
            email,
          },
        });
      }
    } catch (error) {
      if (error.response.status === 400) {
        if (!first_name.trim()) {
          setError("Please enter your first name.");
          return;
        }
        if (!last_name.trim()) {
          setError("Please enter your last name.");
          return;
        }
        if (!email.trim()) {
          setError("Please enter your email address.");
          return;
        }
        if (!password.trim()) {
          setError("Please enter your password.");
          return;
        }
        if (password !== confirmPassword) {
          setError("Passwords do not match.");
          return;
        }
        setError("The password is too similar to the username.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learnify</Text>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      {error && <Text style={styles.errorText}>{error}</Text>}

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={first_name}
        onChangeText={setFirst_Name}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={last_name}
        onChangeText={setLast_Name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Pressable
        style={[styles.button]}
        disabled={false}
        onPress={() => handleRegister()}
      >
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>

      <View style={{ flexDirection: "row" }}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={{ color: "blue" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginTop: 20,
  },
  logo: {
    width: "45%",
    height: "23%",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "100%",
    marginBottom: 5,
    borderRadius: 30,
  },
  button: {
    backgroundColor: "#45b6fe",
    padding: 12,
    borderRadius: 30,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
