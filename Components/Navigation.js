import React from "react";
import { Button, View, Text, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//컴포넌트
import Home from "./Screens/Home.js";
import List from "./Screens/List.js";
import TransportHistory from "./Screens/TransportHistory.js";
import Header from "./Header.js";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomComponent: {
    flex: 1,
    alignSelf: "flex-end",
  },
});

export default function Navigation() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <NavigationContainer style={styles.bottomComponent}>
        {/* initalRouteName="여기에 첫번째로 로딩될 화면 입력" */}
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            header: (props) => <Header title={route.name} {...props} />,
          })}
        >
          <Tab.Screen
            name="운송 오더"
            component={Home}
            options={{
              title: "운송 오더",
              tabBarIcon: ({ color, size }) => (
                <Icon name="message" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="차량 관리"
            component={List}
            options={{
              title: "차량 관리",
              tabBarIcon: ({ color, size }) => (
                <Icon name="list" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="운송 이력"
            component={TransportHistory}
            options={{
              title: "운송이력",
              tabBarIcon: ({ color, size }) => (
                <Icon name="history" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
