import React from "react";
import Styles from "../Styles/StylesComponent";
import { View, Text, TouchableNativeFeedback, TouchableOpacity } from "react-native";

export default function MyBoton(props) {

  const { title, navigation , onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={Styles.myBotonStyle}>
        <Text style={{ fontSize: 19 }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
