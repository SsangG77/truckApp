import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

//컴포넌트
import Home from "./Components/Screens/Home.js";
import List from "./Components/Screens/List.js";
import Item from "./Components/Screens/TransportHistory.js";
import Navigation from "./Components/Navigation.js";

//스타일
import { defaultBackgroundColor } from "./Components/style.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: defaultBackgroundColor,
  },
  loginInner: {
    width: "65%",
    backgroundColor: defaultBackgroundColor,
    padding: 20,
  },

  icon: {
    marginBottom: 70,
    color: "#ffaf24",
    fontSize: 200,
  },

  inputId: {
    height: 60,
    backgroundColor: "#116298",
    borderRadius: 30,
    paddingHorizontal: 20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 30,
  },
  inputPw: {
    height: 60,
    backgroundColor: "#116298",
    borderRadius: 30,
    paddingHorizontal: 20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 60,
  },

  loginBtn: {
    width: "65%",
    height: 60,
    borderRadius: 40,
    backgroundColor: "#ffaf24",
    justifyContent: "center",
    alignItems: "center",
    color: "blue",
  },
  loginText: {
    color: "white",
    fontSize: 20,
  },
});
export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  //테스트용 아이디와 비번
  const testId = "test";
  const testPw = "test";

  const handleLogin = () => {
    //로그인 처리 로직 작성
    if (inputId === testId && inputPw === testPw) {
      setIsLogin(true);
    }

    //로그인 성공 시 setIsLogin(true) 호출
  };

  return (
    <View style={styles.container}>
      {isLogin ? (
        <Navigation />
      ) : (
        <View style={styles.loginContainer}>
          <Icon name="local-shipping" style={styles.icon} />

          <View style={styles.loginInner}>
            <TextInput
              style={styles.inputId}
              placeholder="아이디"
              onChangeText={(text) => setInputId(text)}
              value={inputId}
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.inputPw}
              placeholder="비밀번호"
              secureTextEntry={true}
              onChangeText={(text) => setInputPw(text)}
              value={inputPw}
              placeholderTextColor="white"
            />
            <View style={styles.loginContainer}>
              <TouchableOpacity
                title="로그인"
                style={styles.loginBtn}
                onPress={handleLogin}
              >
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
