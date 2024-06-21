import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl">Auro</Text>
      <Link href="/profile">go to profile</Link>
    </View>
  );
};

export default App;
