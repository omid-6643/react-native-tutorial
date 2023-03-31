import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNetInfo } from "@react-native-community/netinfo";
import { Image } from "react-native-expo-image-cache";

const Products = () => {
  const [products, setProducts] = useState([]);
  const netInfo = useNetInfo();
  const getProducts = async () => {
    try {
      if (netInfo.isInternetReachable && netInfo.type !== "unknown") {
        const { data } = await axios.get("https://dummyjson.com/products");
        setProducts(data?.products);
        const jsonProducts = JSON.stringify(products);
        await AsyncStorage.setItem("products", jsonProducts);
      } else {
        const cacheProducts = await AsyncStorage.getItem("products");
        if (cacheProducts) setProducts(JSON.parse(cacheProducts));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image uri={item.thumbnail} style={styles.img} />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text style={styles.text}>{item.title} </Text>
          <Text style={styles.text}>{item.price}</Text>
        </View>
        <Text style={{ padding: 20 }}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Products Screen</Text>
      <FlatList data={products} renderItem={renderItem} />
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
  text: { fontSize: 35, color: "#e42301" },
  img: { width: "100%", height: 200 },
});

export default Products;
