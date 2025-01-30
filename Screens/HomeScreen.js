import { View, Text, Image, Pressable } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SecretKey } from "../utils/constants";
import { fetchURL } from "../utils/constants";
import { saveDataToStorage } from "../utils/utilityFunctions";
import { getDataFromStorage } from "../utils/utilityFunctions";
import styles from "../styles/style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen = () => {
  const [state, setState] = useState([]);

  async function clearList() {
    console.log("button clicked");
    await AsyncStorage.removeItem(SecretKey);
    setState([]);
    console.log("storage cleared");
  }

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
    } finally {
      const saved = await AsyncStorage.getItem(SecretKey);
      const data = JSON.parse(saved);
      console.log(data.length);
      setState(data);
    }
  }

  useFocusEffect(
    useCallback(() => {
      saveToStorage();
    }, [])
  );

  return (
    <View style={styles.homeScreen}>
      <Image
        style={styles.logo}
        source={require("../assets/BeerStore.jpeg")}
      ></Image>
      <Text style={styles.title}>Welcome! </Text>
      <Text style={styles.beerCount}>{state.length} beers</Text>
      <Pressable style={styles.clearBtn} onPress={clearList}>
        <Text style={styles.clearBtnText}>Clear data</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
