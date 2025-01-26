import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SecretKey } from "../utils/constants";
import ListItem from "../Components/ListItem";
import { fetchURL } from "../utils/constants";
import { saveDataToStorage } from "../utils/utilityFunctions";
import { getDataFromStorage } from "../utils/utilityFunctions";

// check if data in persistent storage exist. If yes, store value in state variable. If no, redirect to HomePage

const TheList = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const nav = useNavigation();

  async function loadList() {
    const dataInStorage = await getDataFromStorage(SecretKey);
    if (dataInStorage) {
      setData(dataInStorage);
    } else {
      nav.navigate("Home");
    }
  }

  const onRefresh = useCallback(async () => {
    await AsyncStorage.removeItem(SecretKey);
    try {
      const data = await saveDataToStorage(SecretKey, fetchURL);
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
