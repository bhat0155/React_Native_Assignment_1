import { View, Text } from "react-native";
import React from "react";

export default function ListItem({ props }) {
  const { name, alcohol } = props;
  return (
    <View>
      <Text>
        {name} - {alcohol}
      </Text>
    </View>
  );
}
