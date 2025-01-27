import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/style";

export default function ListItem({ props }) {
  const { name, alcohol, id } = props;
  const nav = useNavigation();

  function goTo(page) {
    nav.navigate(page, { props: id });
  }
  return (
    <View style={styles.item}>
      <Pressable onPress={() => goTo("DetailPage")}>
        <Text style={styles.itemText}>
          {name} 
        </Text>
        <Text style={styles.subText}>
        {alcohol}
        </Text>
      </Pressable>
    </View>
  );
}
