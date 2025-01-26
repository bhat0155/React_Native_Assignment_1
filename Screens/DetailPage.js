import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SecretKey } from "../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DetailPage = ({ route }) => {
  const id = route.params?.props;

  async function loadList() {
    const dataInStorage = await AsyncStorage.getItem(SecretKey);
    if (dataInStorage) {
      const parsedData = JSON.parse(dataInStorage);
      console.log("in detai page now");
      console.log(parsedData)
    } else {
      console.log("nothing in storage");
    }
  }

  useEffect(()=>{
    loadList()
  },[])

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default DetailPage;
