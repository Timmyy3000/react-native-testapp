import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";



export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    flex: 1,
  },


});
