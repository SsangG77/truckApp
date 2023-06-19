import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

//컴포넌트
import Header from "../Header";

export default function Home({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleContainerStyle: { left: 0, right: 0 },
      headerTitle: () => <Header />,
    });
  }, [navigation]);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
