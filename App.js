import React from "react";
import { Button, View, Text, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

//컴포넌트
import Home from "./Components/Screens/Home.js";
import List from "./Components/Screens/List.js";
import Item from "./Components/Screens/TransportHistory.js";
import Navigation from "./Components/Navigation.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}
