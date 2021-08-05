import { StyleSheet } from "react-native";

export default StyleSheet.create({
  "item-wrap": {
    position: "relative",
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    zIndex: 0
  },
  "item-img": {
    height: 48,
    width: 48,
    marginVertical: 1,
    marginHorizontal: 1,
    alignItems: 'flex-start',
  },
  "desc-wrap": {
    color: "black",
    marginHorizontal: 8
  },
  "desc-prim": {
    fontWeight: "700"
  },
  "desc-seco": {
    color: "gray"
  },
  "detail-wrap": {
    position: "absolute",
    margin: 8,
    bottom: 0,
    right: 0
  },
  "detail-link": {
    color: "blue"
  }
});