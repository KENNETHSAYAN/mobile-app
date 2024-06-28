import React, { useState, useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import SignInScreen from "./Authentication/SignInScreen";
import SignUpScreen from "./Authentication/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LandingPage from "./screens/landingpage";
import CourseDetailsScreen from "./screens/CourseDetailsScreen";
import MathematicsScreen from "./screens/MathematicsScreen";
import sciencescreen from "./screens/sciencescreen";
import HistoryScreen from "./screens/historyscreen";
import EnglishScreen from "./screens/EnglishScreen"
import ViewTables from "./screens/ViewTable";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="landing"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ViewTables"
          component={ViewTables}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetailsScreen}
          options={{ headerShown: true }}
        />
         <Stack.Screen
          name="Math"
          component={MathematicsScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Science"
          component={sciencescreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="English"
          component={EnglishScreen}
          options={{ headerShown: true }}
        />
     
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;