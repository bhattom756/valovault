import React, { useState } from "react";
import { View, TouchableOpacity, Pressable, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Text, Input, ScrollView } from "tamagui";
import { router } from "expo-router";

const signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("Login success");
          router.replace('/home');
        })
        .catch((err) => {
          Alert.alert("Login error", err.message);
        });
    } else {
      Alert.alert("Login error", "Please enter both email and password.");
    }
  };

  const handlePress = () => {
    router.replace('/signup');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex items-center mt-[150px]">
          <Text className="text-black pb-5 text-4xl font-extrabold">
            Login{" "}
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
            onPress={handleLogin}
            className="bg-blue-500 p-3 rounded-md w-[150px]"
          >
            <Text className="text-white text-[18px] text-center">Login</Text>
          </TouchableOpacity>
          <Pressable
            className="mt-4"
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.8 : 1,
              },
            ]}
            onPress={handlePress}
          >
            {({ pressed }) => (
              <Text
                className={`text-[16px] font-medium ${
                  pressed ? "text-black" : "text-red-300"
                }`}
              >
                Don't have an account? Sign Up
              </Text>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signin;
