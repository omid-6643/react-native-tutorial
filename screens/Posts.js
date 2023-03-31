import { Text, View, StyleSheet, Button } from "react-native";

const Posts = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Posts Screen</Text>
      <Button
        title="see comments"
        onPress={() => navigation.navigate("Comments")}
      />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
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
  text: { fontSize: 35, color: "#e40101" },
});

export default Posts;
