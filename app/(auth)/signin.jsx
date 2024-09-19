import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "tamagui";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const signin = () => {
  return (
    <View className="bg-white">
      <Text className="text-white mt-5">signin</Text>
    </View>
  )
}

export default signin