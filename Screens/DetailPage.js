import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SecretKey } from "../utils/constants";
import { getDataFromStorage } from "../utils/utilityFunctions";
import styles from "../styles/style";

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
    <View style={styles.detailContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.beerName}>{beer.name}</Text>
        <Text style={styles.property}>Brand - {beer.brand}</Text>
        <Text style={styles.property}>Style -{beer.style}</Text>
        <Text style={styles.property}>Hop - {beer.hop}</Text>
        <Text style={styles.property}>Malt - {beer.malts}</Text>
        <Text style={styles.property}>Alcohol % - {beer.alcohol}</Text>
        <Text style={styles.property}>Yeast - {beer.yeast}</Text>
        <Text style={styles.property}>ID - {beer.id}</Text>
      </View>
    </View>
  );
};

export default DetailPage;
