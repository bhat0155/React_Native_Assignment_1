import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SecretKey } from "../utils/constants";
import { getDataFromStorage } from "../utils/utilityFunctions";

const DetailPage = ({ route }) => {
  const id = route.params?.props;
  const [beer, setBeer] = useState([]);

  async function loadList() {
    const dataInStorage = await getDataFromStorage(SecretKey);
    if (dataInStorage) {
      const theDrink = dataInStorage.find((item) => item.id == id);
      setBeer(theDrink);
    } else {
      console.log("There is nothing in local storage");
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
