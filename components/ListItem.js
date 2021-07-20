import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  listItemText: {
    fontSize: 18,
  },
});



const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon name="close" size={20} color="firebrick" onPress = {() => deleteItem(item.id)}/>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
