import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

//컴포넌트
import Header from "../Header.js";

const items = [
  { _id: 1, name: "Container 1" },
  { _id: 2, name: "Container 2" },
  { _id: 3, name: "Container 3" },
];

export default function List() {
  const styles = StyleSheet.create({
    container: {
      margin: 10,
    },
    item: {
      margin: 10,
      backgroundColor: "black",
    },
    button: {
      margin: 10,
      backgroundColor: "black",
    },
  });

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Button
          style={styles.button}
          key={item._id}
          title={item.name}
          onPress={() => {}}
        />
      ))}
    </View>
  );
}
