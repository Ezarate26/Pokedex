import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {COLORS} from "../../utils/constants"



export default function ItemMenu({ title, text }) {
    return (
      <View style={styles.itemMenu}>
        <Text style={styles.itemMenuTitle}>{title}:</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
}
const styles = StyleSheet.create({
  itemMenu: {
    flexDirection: "row",
    justifyContent:"space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#0305A8",
    marginTop: 5,
    borderRadius:10,
    backgroundColor: "rgba(29,52,84,0.7)",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
    width: "50%",
    paddingLeft:20,
    },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color:COLORS.yellow,
    width:"50%"
  }
});