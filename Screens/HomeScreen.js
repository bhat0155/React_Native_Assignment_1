import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SecretKey } from "../utils/constants";
import { fetchURL } from "../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveDataToStorage } from "../utils/utilityFunctions";
import { getDataFromStorage } from "../utils/utilityFunctions";

const HomeScreen = () => {
  // check if data exist in local storage. If no, fetch and store the data in the local storage

  async function saveToStorage() {
    try {
      const JsonValue = getDataFromStorage(SecretKey);
      if (JsonValue) {
        console.log("data already exist in the local storage");
      } else {
        await saveDataToStorage(SecretKey, fetchURL);
      }
    } catch (err) {
      console.log(err);
    }
  }

  // This will only run when the page loads the first time
  useEffect(() => {
    saveToStorage();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
