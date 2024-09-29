import React, { useState } from "react";
import { View, TouchableOpacity, Pressable, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Use createUserWithEmailAndPassword for sign-up
import { auth } from "../../config/firebase";
import { Text, Input, ScrollView } from "tamagui";
import { router } from "expo-router";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (email !== "" && password !== "") {
      createUserWithEmailAndPassword(auth, email, password) // Correct method for signing up
        .then(() => {
          // console.log("Signup success");
          Alert.alert("Signup Success", "Your account has been created!");
          router.replace('/signin')
        })
        .catch((err) => Alert.alert("Sign up error", err.message));
        console.log("error signup");
    } else {
      Alert.alert("Input Error", "Please enter both email and password");
    }
  };

  function handleLogin() {
    router.replace("/signin");
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex items-center mt-[150px]">
          <Text className="text-black pb-5 text-4xl font-extrabold">
            Register your Account{" "}
          </Text>
          <View className="mt-10">
            <Input
              size="$5"
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              className="w-[300px] mb-8 bg-white p-2 border-b-2 border-gray-300 text-black"
            />
            <Input
              size="$5"
              placeholder="Enter your password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              className="mb-10 p-2 border-b-2 bg-white border-gray-300 text-black"
            />
          </View>
          <TouchableOpacity
            onPress={handleSignUp}
            className="bg-blue-500 p-3 rounded-md w-[150px]"
          >
            <Text className="text-white text-[18px] text-center">Sign Up</Text>
          </TouchableOpacity>
          <Pressable
            className="mt-4"
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.8 : 1,
              },
            ]}
            onPress={handleLogin}
          >
            {({ pressed }) => (
              <Text
                className={`text-[16px] font-medium ${
                  pressed ? "text-black" : "text-red-300"
                }`}
              >
                Registered User? Log In!
              </Text>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
