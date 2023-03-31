import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Posts from "../screens/Posts";
import Comments from "../screens/Comments";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#bedfda7f" },
        headerTintColor: "#000",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Posts" component={Posts} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
