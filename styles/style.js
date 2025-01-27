import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  subText: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  container: {
    backgroundColor: "#f9f9f9",
    paddingInline: 20,
    flex: 1,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  homeScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eddfef",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },

  listContent: {
    paddingVertical: 10,
  },
  item: {
    backgroundColor: "#eddfef",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    fontSize: 16,
  },
});

export default styles;
