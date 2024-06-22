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
import { Linking } from "react-native"; 
import { useNavigation } from "@react-navigation/native"; 
import authentication from "../api/authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignInScreen = () => {
  const navigation = useNavigation(); 

  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); 
  const [rememberMe, setRememberMe] = useState(true); 

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const minPasswordLength = 8;
  const maxPasswordLength = 16;

  const handleLogin = async () => {
    try {
      setError(null);

      if (!email.trim()) {
        setError("Please enter your email address.");
        return;
      }

      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address.");
        return;
      }
      if (!password.trim()) {
        setError("Please enter your password.");
        return;
      }

      if (password.length < minPasswordLength) {
        setError("Password must be at least 8 characters long.");
        return;
      }

      if (password.length > maxPasswordLength) {
        setError("Password must be no more than 16 characters long.");
        return;
      }

      if (rememberMe) {
        console.log("Remember Me enabled");
      }
      const response = await authentication.login(email, password);
      if (response.status === 200) {
        let token = response.data.auth_token;
        AsyncStorage.setItem("auth_token", token);
        navigation.navigate("Home");
        console.log("Login successful");
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        Alert.alert(
          "Invalid Credentials!",
          "Please check your email address and password and try again.")
      }
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password)"); 
    navigation.navigate("Forgot");
  };

  return (
    <View style={styles.container}>
      {/* Title stacked above the logo */}
      <Text style={styles.title}>Learnify</Text>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      {error && <Text style={styles.errorText}>{error}</Text>}

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

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable
          style={styles.checkbox}
          onPress={() => setRememberMe(!rememberMe)}
        >
          {rememberMe && (
            <Image
              source={require("../assets/check.png")}
              style={styles.checkIcon}
            />
          )}
        </Pressable>
        <Text style={styles.checkboxText}>Remember Me</Text>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "blue" }}>Register</Text>
        </TouchableOpacity>
      </View>

      {/* Social Media Links Section */}
      <View style={styles.socialMediaLinks}>
        {/* Facebook Icon */}
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.facebook.com/")}
        >
          <Image
            source={require("../assets/facebook.png")}
            style={styles.socialMediaIcon}
          />
        </TouchableOpacity>

        {/* Google Icon */}
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.google.com/")}
        >
          <Image
            source={require("../assets/gmail.jpg")}
            style={styles.socialMediaIcon}
          />
        </TouchableOpacity>

        {/* Twitter Icon */}
        <TouchableOpacity
          onPress={() => Linking.openURL("https://twitter.com/")}
        >
          <Image
            source={require("../assets/twitter.png")}
            style={styles.socialMediaIcon}
          />
        </TouchableOpacity>
      </View>

      {/* View Table Button */}
      <TouchableOpacity
        style={styles.viewTableButton}
        onPress={() => navigation.navigate("ViewTables")}
      >
        <Text style={styles.viewTableButtonText}>View Table</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 40, 
    marginBottom: 20, 
    marginTop: 10,
    fontWeight: "bold",
  },
  logo: {
    width: "64%",
    height: "33%",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "100%",
    marginBottom: 10, 
    borderRadius: 30,
  },
  button: {
    backgroundColor: "#45b6fe",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc", 
    marginRight: 10, 
  },
  checkedCheckbox: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "black", 
    position: "absolute",
    top: 5, 
    left: 5, 
  },
  checkboxText: {
    fontSize: 16,
  },
  forgotPasswordText: {
    fontSize: 16,
    marginLeft: 43,
  },
  socialMediaLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20, 
  },
  socialMediaIcon: {
    width: 70,
    height: 50,
    resizeMode: "contain", 
  },
  checkIcon: {
    height: 13,
    width: 13,
    marginTop: 2,
    marginLeft: 2,
  },
  viewTableButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#45b6fe",
    borderRadius: 30,
  },
  viewTableButtonText: {
    color: "white",
    fontSize: 16,
  },
});
