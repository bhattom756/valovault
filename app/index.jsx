// import { StatusBar } from "expo-status-bar";
import { Image, View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { router, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import Modal from '../components/Modal';

export default function App() {
  const homelogo = require('../assets/images/homepage.png');
  // const mute = require('../assets/images/mute.png');
  // const unmute = require('../assets/images/unmute.png');
  // const privacy = require('../assets/images/pp.png');

  const handleSignIn = () => {
    router.replace('/signin');
  };
  const handlePress = () => {
    router.replace('/home');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#ff5561]">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full flex mt-3 items-center h-full px-4">
          <View className="bg-white rounded-[200px]">
            <Image source={homelogo} className="w-[250px] h-[300px]" resizeMode="cover" />
          </View>
          <View className="relative mt-8">
            <Text className="text-5xl text-white font-extrabold text-center">
              Valo
              <Text className="text-[#000]">Vault</Text>
            </Text>
          </View>

          <Text className="text-xl font-pregular text-gray-100 mt-7 text-center">
            Keep an Eye on your
            <Text className="font-extrabold"> Act Rank</Text>,
            <Text className="font-extrabold"> Gameplay Stats</Text>,
            <Text className="font-extrabold"> ValoNews </Text>, and an ultimate guide for
            <Text className="font-extrabold"> Agent lineups</Text>.
          </Text>
          <Pressable
            onPress={handleSignIn}
            className="bg-white border-white mt-20 px-8 rounded-md py-2 active:bg-[#000] transition-all duration-150"
            style={({ pressed }) => [
              pressed ? { backgroundColor: '#000' } : {},
              { transitionDuration: '150ms' },
            ]}>
            {({ pressed }) => (
              <Text
                className={`text-[20px] font-extrabold transition-all duration-150 ${
                  pressed ? 'text-white' : 'text-[#ff5561]'
                }`}>
                Sign In with Riot ID
              </Text>
            )}
          </Pressable>
          <Pressable
            className="mt-4"
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.8 : 1,
              },
            ]}
            onPress={handlePress} // Ensure onPress is here
          >
            {({ pressed }) => (
              <Text className={`text-[16px] font-medium ${pressed ? 'text-black' : 'text-white'}`}>
                Continue as a Guest!
              </Text>
            )}
          </Pressable>
          <Modal/>
        </View>
      </ScrollView>
      {/* <StatusBar backgroundColor="#161622" style="light" /> */}
    </SafeAreaView>
  );
}
