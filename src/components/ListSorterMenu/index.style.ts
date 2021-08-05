import { StyleSheet } from "react-native";

export default StyleSheet.create({
  "item-wrap": {
    position: "relative",
    padding: 8,
    margin: 8,
    backgroundColor: "white",
    textAlign: "right"
  },
  "item-text": {
    fontWeight: "700",
    alignSelf: "flex-end"
  },
  "menu-option": {
    position: "absolute",
    zIndex: 1,
    right: 0,
    top: "100%",
    margin: 8,
    borderRadius: 4,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84
  },
  "item-option": {
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
  },
  "selected": {
    fontWeight: "700"
  }
})
