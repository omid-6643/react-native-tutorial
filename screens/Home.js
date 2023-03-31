import { useNetInfo } from "@react-native-community/netinfo";
import { Text, View, StyleSheet, Button } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";
import { set } from "react-native-reanimated";

const Home = ({ navigation }) => {
  const netInfo = useNetInfo();
  const [test, setTest] = useState();
  const registerPushNotifications = async () => {
    try {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") return;
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    registerPushNotifications();
    Notifications.addNotificationReceivedListener((notification) => {
      console.log(notification);
      setTest(notification);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="see Posts" onPress={() => navigation.navigate("Posts")} />
      {netInfo.isInternetReachable && netInfo.type !== "unknown" ? (
        <Text style={styles.text}>connected</Text>
      ) : (
        <Text style={styles.text}>not connected</Text>
      )}
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

export default Home;
