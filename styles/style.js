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
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingInline: 20,
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
  detailContainer: {
    backgroundColor: "#eddfef",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "90%",
    padding: 20,
    alignItems: "center",
  },
  beerName: {
    fontSize: 24,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#5a3d5c",
    width: "100%",
    textAlign: "center",
    borderRadius: 10,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  property: {
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
    borderWidth: 1,
    backgroundColor: "#5a3d5c",
    color: "white",
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  errorText: {
    fontWeight: "bold",
  },
  clearBtn: {
    backgroundColor: "#333",
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  clearBtnText: {
    color: "white",
  },
  beerCount: {
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 10,
  },
});

export default styles;
