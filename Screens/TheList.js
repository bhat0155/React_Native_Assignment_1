import { View, Text } from "react-native";
import React from "react";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import DetailPage from "./DetailPage";

const TheList = () => {
  const nav = useNavigation();
  function goTo(page) {
    nav.navigate(page);
  }
  return (
    <View>
      <Text>TheList</Text>
      <Button name="detail" onPressIn={() => goTo("DetailPage")}>
        Detail
      </Button>
    </View>
  );
};

export default TheList;
