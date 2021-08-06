import { relative } from "path/posix";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ["page-wrap"]: {
    backgroundColor: "white",
    position: "relative",
    margin: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
  },
  ["title"]: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 5,
  },
  ["img-wrap"]: {
    width: "100%",
    height: "auto",
  },
  ["image"]: {
    width: "31.3%",
    height: 96,
    margin: 4
  },
  ["text-bold"]: {
    fontSize: 16,
    fontWeight: "700"
  },
  ["text-info"]: {
    fontWeight: "300",
    fontSize: 16
  },
});

export default styles