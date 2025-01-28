import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SecretKey } from "../utils/constants";
import ListItem from "../Components/ListItem";
import { fetchURL } from "../utils/constants";
import { saveDataToStorage } from "../utils/utilityFunctions";
import { getDataFromStorage } from "../utils/utilityFunctions";
import Error from "../Components/Error";

import styles from "../styles/style";

const TheList = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(false);
  const nav = useNavigation();

  async function loadList() {
    const dataInStorage = await getDataFromStorage(SecretKey);
    if (dataInStorage) {
      setData(dataInStorage);
      setError(false);
    } else {
      nav.navigate("Home");
    }
  }

  const onRefresh = useCallback(async () => {
    if (refreshing) return;
    setRefreshing(true);
    setError(false);
    await AsyncStorage.removeItem(SecretKey);
    try {
      const data = await saveDataToStorage(SecretKey, fetchURL);
      setData(data);
    } catch (err) {
      console.log("err occured on refreshing the item = ", err);
      setError(true);
      setTimeout(() => {
        setError(false);
        onRefresh();
      }, 1500);
    } finally {
      setRefreshing(false);
    }
  });

  useEffect(() => {
    loadList();
  }, []);

  return (
    <View style={styles.container}>
      {error ? (
        <Error></Error>
      ) : (
        <FlatList
          style={styles.listContainer}
          keyExtractor={(item) => item.uid}
          contentContainerStyle={styles.listContent}
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
      )}
    </View>
  );
};

export default TheList;
