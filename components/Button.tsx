import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = () => {
  return (
    <TouchableOpacity className="bg-yellow-500 rounded-lg p-2">
      <Text className="text-xl">Click Me</Text>
    </TouchableOpacity>
  );
};

export default Button;
