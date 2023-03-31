import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View, StyleSheet, Button } from "react-native";

const GoHome = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>go home</Text>
      <Button title="Home" onPress={() => navigate.navigate("Home")} />
    </View>
  );
};

const Comments = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comments Screen</Text>
      <GoHome />
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
  text: { fontSize: 35, color: "#01e43a" },
});

export default Comments;
