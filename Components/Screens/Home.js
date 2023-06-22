import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome.js";

//스타일
import { defaultBackgroundColor } from "../style.js";

//컴포넌트
import Header from "../Header";

export default function Home() {
  const style = {
    container: {},
    innderHeader: {},
    icon: {
      size: 30,
      backgroundColor: "orange",
      color: "white",
    },
  };

  return (
    <View>
      <View>
        <Icon name="truck" size={30} color="orange" />
      </View>
    </View>
  );
}
