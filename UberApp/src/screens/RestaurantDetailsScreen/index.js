
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import DishListItem from '../../components/DishListItem';
import HeaderTitle from './Header';
import styles from './styles';
import { useRoute,useNavigation } from '@react-navigation/native';
import { Restaurant, Dish } from '../../models';
import { DataStore } from 'aws-amplify';



const RestaurantDetailsPage = () => {
  const [restaurant, setRestaurant] =useState(null)
  const [dishes, setDishes] = useState([])

  const route = useRoute();
  const navigation =useNavigation();

  const id = route.params?.id;

  
  useEffect(() => {
    //fetch the restaurant with the id
    DataStore.query(Restaurant, id).then(setRestaurant);

    DataStore.query(Dish, (dish) => dish.restaurantID("eq",id)).then(setDishes);
  },[])


  if (!restaurant) {
    return <ActivityIndicator size={"large"} color='gray'/>;
  }
  
  return (
    <View style={styles.page}>
      <FlatList 
        ListHeaderComponent={()=><HeaderTitle restaurant={restaurant}/>}
        data={dishes}
        renderItem={({item})=><DishListItem dish={item}/>}
        keyExtractor={(item)=> item.name}
      />
    <Ionicons
      onPress={()=> navigation.goBack()}
      name="arrow-back-circle"
      size={45}
      color="white"
      style={styles.iconContainer}
        />
    </View>
  )
}


export default RestaurantDetailsPage;