import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Posts from "../screens/Posts";
import Comments from "../screens/Comments";
import Products from "../screens/Products";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from "react-native";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#ff3c3cc5",
        tabBarInactiveTintColor: "blue",
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            return focused ? (
              <AntDesign name="home" size={24} color={color} />
            ) : (
              <AntDesign name="home" size={24} color={color} />
            );
          } else if (route.name === "Posts") {
            return focused ? (
              <MaterialCommunityIcons name="post" size={24} color={color} />
            ) : (
              <MaterialCommunityIcons name="post" size={24} color={color} />
            );
          } else if (route.name === "Comments") {
            return focused ? (
              <FontAwesome name="comments" size={24} color={color} />
            ) : (
              <FontAwesome name="comments" size={24} color={color} />
            );
          } else if (route.name === "Products") {
            return focused ? (
              <FontAwesome name="comments" size={24} color={color} />
            ) : (
              <FontAwesome name="comments" size={24} color={color} />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Comments" component={Comments} />
      <Tab.Screen name="Products" component={Products} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
