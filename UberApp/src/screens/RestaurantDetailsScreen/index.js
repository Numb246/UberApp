import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import HeaderTitle from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Restaurant, Dish } from "../../models";
const RestaurantDetailsPage = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;
  useEffect(() => {
    if (id) {
      DataStore.query(Restaurant, id).then(setRestaurant);
      DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(
        setDishes
      );
    }
  }, [id]);
  if (!restaurant) {
    return (
      <ActivityIndicator
        size={"large"}
        color="gray"
        style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
      />
    );
  }
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <HeaderTitle restaurant={restaurant} />}
        data={dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default RestaurantDetailsPage;
