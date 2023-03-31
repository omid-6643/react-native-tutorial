import "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigators/Stacknavigator";
import TabNavigator from "./navigators/TabNavigator";
import DrawerNavigator from "./navigators/DrawerNavigator";


const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator/>
      {/* <DrawerNavigator/> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: Platform.OS === "android" ? "#d6d6d6" : "red",
    ...Platform.select({
      android: { backgroundColor: "#d6d6d6" },
      ios: { backgroundColor: "red" },
    }),
  },
  text: { fontSize: 35, color: "#01e43a" },
  platform: { color: "green", fontSize: 50 },
  img: { width: 100, height: 100 },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    padding: 10,
    fontSize: 25,
    color: "white",
    borderColor: "#000",
    borderWidth: 1,
  },
  textBtn: {
    color: "black",
    fontSize: 20,
    width: 100,
    height: 30,
    textAlign: "center",
  },
  button: { borderRadius: 20, padding: 10, elevation: 2 },
  buttonOpen: { backgroundColor: "pink" },
  videoPlayer: {
    width: "100%",
    height: "30%",
    backgroundColor: "black",
  },
});

export default App;
