import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ListItem({ props }) {
  const { name, alcohol, id } = props;
  const nav=useNavigation()

  function goTo(page){
    nav.navigate(page, {props: id})
  }
  return (
    <View>
      <Pressable onPress={()=>goTo("DetailPage")}>
        <Text>
          {name} - {alcohol}
        </Text>
      </Pressable>
    </View>
  );
}
