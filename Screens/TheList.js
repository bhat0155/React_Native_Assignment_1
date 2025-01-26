import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import DetailPage from "./DetailPage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SecretKey } from "../utils/constants";
import ListItem from "../Components/ListItem";

// check if data in persistent storage exist. If yes, store value in state variable. If no, redirect to HomePage

const TheList = () => {
  const [data, setData] = useState([]);
  const nav = useNavigation();

  async function loadList() {
    const dataInStorage = await AsyncStorage.getItem(SecretKey);
    if (dataInStorage) {
      const parsedData = JSON.parse(dataInStorage);
      setData(parsedData);
    } else {
      nav.navigate("/");
    }
  }

  useEffect(() => {
    loadList();
  }, []);

  function goTo(page) {
    nav.navigate(page);
  }
  return (
    <View>
      <Text>TheList</Text>
      <Button name="detail" onPressIn={() => goTo("DetailPage")}>
        Detail
      </Button>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <ListItem props={item}>List</ListItem>;
        }}
      ></FlatList>
    </View>
  );
};

export default TheList;
