import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function Header(props) {
  const { title } = props;

  const style = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "#105C8E",
      marginLeft: "-1.7%",

      width: Dimensions.get("window").width,
    },
    menuIcon: {
      color: "white",
    },
    headerTextContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    headerText: {
      color: "white",
      fontSize: 23,
    },
  });

  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          console.log("메뉴 버튼 클릭됨");
        }}
      >
        <Icon style={style.menuIcon} name="menu" size={30} color="black" />
      </TouchableOpacity>
      <View style={style.headerTextContainer}>
        <Text style={style.headerText}>{title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log("휴지통 버튼 클릭됨");
        }}
      >
        <Icon style={style.menuIcon} name="trash" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}
