import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { capitalize, map } from "lodash";
import {COLORS} from "../../utils/constants"

export default function Stats({stats}) {

  const barStyles = (num) => {
    const color = num > 49 ? "#00ac17" : "#ff3e3e";
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };

  return (
    <View style={styles.gralContainer}>
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]} />
            </View>
          </View>
        </View>
      ))}
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  gralContainer: {
    display: "flex",
    alignItems:"center",
    justifyContent:"center"

  },
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
    padding: 10,
    borderRadius:15,
    width:"90%",
    backgroundColor: "rgba(29,52,84,0.7)",
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 2,
    color:COLORS.blue
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    fontWeight:"bold",
    color: "#fff",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
    fontWeight:"bold",
    color: "#fff",
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});
