import { View, Text,Image } from "react-native";
import React, { useEffect } from "react";
import { SecretKey } from "../utils/constants";
import { fetchURL } from "../utils/constants";
import { saveDataToStorage } from "../utils/utilityFunctions";
import { getDataFromStorage } from "../utils/utilityFunctions";
import styles from "../styles/style";

const HomeScreen = () => {
  async function saveToStorage() {
    try {
      const JsonValue = await getDataFromStorage(SecretKey);
      if (JsonValue) {
        console.log("data already exist in the local storage");
      } else {
        await saveDataToStorage(SecretKey, fetchURL);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    saveToStorage();
  }, []);

  return (
    <View style={ styles.homeScreen}>
      <Image style={styles.logo} source={require("../assets/BeerStore.jpeg")}></Image>
      <Text style={styles.title}>Welcome! </Text>
    </View>
  );

};

export default HomeScreen;
