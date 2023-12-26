import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const Welcome = () => {
  const [fontsLoaded] = useFonts({
    Inter: require("../../assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <Text
        style={{
          fontFamily: "Inter",
          fontSize: 30,
          textAlign: "center",
          color: "#36454F",
        }}
      >
        Welcome
      </Text>
    </View>
  );
};

export default Welcome;
