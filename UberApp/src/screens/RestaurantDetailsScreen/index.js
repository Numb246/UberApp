
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import DishListItem from '../../components/DishListItem';
import restaurants from '../../../assets/data/restaurants.json';
import HeaderTitle from './Header';
import styles from './styles';
import { useRoute,useNavigation } from '@react-navigation/native';

const restaurant = restaurants[0];
("");

const RestaurantDetailsPage = () => {
  const route = useRoute();
  const navigation =useNavigation();

  const id = route.params?.id;
  console.warn(id);
  
  return (
    <View style={styles.page}>
      <FlatList 
        ListHeaderComponent={()=><HeaderTitle restaurant={restaurant}/>}
        data={restaurant.dishes}
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