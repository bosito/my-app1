import React from "react";
import Styles from "../Styles/StylesComponent";
import { View, Text, TouchableOpacity } from "react-native";

export default function MyBoton(props) {

  const { title, navigation , onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={Styles.myBotonStyle}>
        <Text style={{ fontSize: 19, color: 'white' }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
