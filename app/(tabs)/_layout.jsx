import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";

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
        name="book"
        options={{
          title: "BookMark",
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
        name="profile"
        options={{
          title: "Profile",
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
  );
};

export default TabsLayout;
