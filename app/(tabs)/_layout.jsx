import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";


const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Text>
      jioj
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
    <Tabs 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor:'#ffa001',
        tabBarInactiveTintColor:"#cdcde0",
        tabBarStyle:{
          backgroundColor:"#161622",
          borderTopWidth:1,
          borderTopColor:'#232533',
          height: 84,
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
        //   tabBarIcon: ({ color, focused }) => (
        //     <TabIcon
        //       icon={icons.home}
        //       color={color}
        //       name="Home"
        //       focused={focused}
        //     />
        //   ),
        }}
      />
      <Tabs.Screen
        name="tour"
        options={{
          title: "Tournaments",
          headerShown: false,
        //   tabBarIcon: ({ color, focused }) => (
        //     <TabIcon
        //       icon={icons.bookmark}
        //       color={color}
        //       name="BookMark"
        //       focused={focused}
        //     />
        //   ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Global Chat",
          headerShown: false,
        //   tabBarIcon: ({ color, focused }) => (
        //     <TabIcon
        //       icon={icons.plus}
        //       color={color}
        //       name="Create"
        //       focused={focused}
        //     />
        //   ),
        }}
      />
      <Tabs.Screen
        name="lineup"
        options={{
          title: "Agent Lineups",
          headerShown: false,
        //   tabBarIcon: ({ color, focused }) => (
        //     <TabIcon
        //       icon={icons.profile}
        //       color={color}
        //       name="Profile"
        //       focused={focused}
        //     />
        //   ),
        }}
      />
    </Tabs>
    <StatusBar backgroundColor="#161622" style="light" />
    </>
    
  );
};

export default TabsLayout;
