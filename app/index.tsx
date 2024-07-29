import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { Component } from "react";
import { Link } from "expo-router";
import Button from "@/components/Button";

export class index extends Component {
  render() {
    return (
      <SafeAreaView className="h-full bg-purple-950">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="flex flex-col items-center justify-center h-full">
            <Text className="text-white text-7xl font-bold mb-4">
              Welcome
            </Text>
            <Button />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default index;
