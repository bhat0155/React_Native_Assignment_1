import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveDataToStorage(key, url) {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      console.log(
        `Fetch failed with status: ${resp.status}, message: ${resp.statusText}`
      );
      throw new Error(resp.statusText);
    }
    const data = await resp.json();
    const dataInString = JSON.stringify(data);
    await AsyncStorage.setItem(key, dataInString);
    return data;
  } catch (err) {
    console.log("inside fetch utility function");
    console.log(err);
    throw err; // this will be cached and will set error state variable to true
  }
}

export async function getDataFromStorage(key) {
  const data = await AsyncStorage.getItem(key);
  const result = data ? JSON.parse(data) : null;
  return result;
}
