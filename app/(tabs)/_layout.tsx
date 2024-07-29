import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Book, Camera, Home, PersonStanding, PlusCircle } from "lucide-react-native";
import { twMerge } from "tailwind-merge";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center">
                <Home color={"red"} />
                <Text className={twMerge("text-xs", focused && "font-bold")}>Home</Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center">
                <Book color={"red"} />
                <Text className={twMerge("text-xs", focused && "font-bold")}>BookMark</Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center">
                <PlusCircle color={"red"} />
                <Text className={twMerge("text-xs", focused && "font-bold")}>Create</Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center">
                <PersonStanding color={"red"} className="" />
                <Text className={twMerge("text-xs", focused && "font-bold")}>Profile</Text>
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
