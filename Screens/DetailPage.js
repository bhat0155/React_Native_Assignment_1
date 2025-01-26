import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SecretKey } from "../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DetailPage = ({ route }) => {
  const id = route.params?.props;
  const [beer, setBeer] = useState([]);
  console.log(id);

  async function loadList() {
    const dataInStorage = await AsyncStorage.getItem(SecretKey);
    if (dataInStorage) {
      const parsedData = JSON.parse(dataInStorage);
      console.log("in detai page now");
      console.log(parsedData);
      const theDrink = parsedData.find((item) => item.id == id);
      console.log(theDrink);
      setBeer(theDrink);
    } else {
      console.log("nothing in storage");
    }
  }

  useEffect(() => {
    loadList();
  }, []);

  return (
    <View>
      <Text>The id is -{beer.id}</Text>
      <Text>The name is -{beer.name}</Text>
      <Text>The brand is -{beer.brand}</Text>
      <Text>The style is -{beer.style}</Text>
      <Text>The hop is -{beer.hop}</Text>
      <Text>The malt is -{beer.malts}</Text>
      <Text>The alcohol % is -{beer.alcohol}</Text>
    </View>
  );
};

export default DetailPage;
