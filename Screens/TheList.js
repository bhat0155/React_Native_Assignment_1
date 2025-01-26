import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import DetailPage from "./DetailPage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SecretKey } from "../utils/constants";
import ListItem from "../Components/ListItem";
import { fetchURL } from "../utils/constants";

// check if data in persistent storage exist. If yes, store value in state variable. If no, redirect to HomePage

const TheList = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
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

  const onRefresh = useCallback(async () => {
    await AsyncStorage.removeItem(SecretKey);
    try {
      const resp = await fetch(fetchURL);
      if (!resp.ok) throw new Error("bad fetch on refresh");
      const data = await resp.json();
      const dataString = JSON.stringify(data);
      await AsyncStorage.setItem(SecretKey, dataString);
      setData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setRefreshing(false);
    }
  });

  useEffect(() => {
    loadList();
  }, []);

  return (
    <View>
      <Text>TheList</Text>

      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          ></RefreshControl>
        }
        data={data}
        renderItem={({ item }) => {
          return <ListItem props={item}>List</ListItem>;
        }}
      ></FlatList>
    </View>
  );
};

export default TheList;
