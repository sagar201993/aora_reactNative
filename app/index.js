import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-pblack">Auro</Text>
      <Link href="/home">go to home</Link>
    </View>
  );
};

export default App;
