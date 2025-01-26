import { View, Text } from "react-native";
import React from "react";
import { SecretKey } from "../utils/constants";
import { fetchURL } from "../utils/constants";

import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  // check if data exist in local storage. If no, fetch and store the data in the local storage


  async function saveToStorage() {
    try{
        const jsonValue = await AsyncStorage.getItem(SecretKey);
        if (jsonValue == null){
            const resp = await fetch(fetchURL);
            if (!resp.ok) throw new Error(resp.statusText);
            const data = await resp.json();
            const dataInString= JSON.stringify(data)
            await AsyncStorage.setItem(SecretKey, dataInString)
        }
        else{
            console.log("data already exist in the local storage")
        }
    }catch(err){
        console.log(err)
    }
  }

  saveToStorage()

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
