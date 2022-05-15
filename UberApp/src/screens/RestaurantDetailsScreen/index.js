
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import DishListItem from '../../components/RestaurantItem/DishListItem';
import restaurants from '../../../assets/data/restaurants.json';
import {Header} from './Header';
const restaurant = restaurants[0];
("");

const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <FlatList 
        ListHeaderComponent={Header}
        data={restaurant.dishes}
        renderItem={({item})=><DishListItem dish={item}/>}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex:1,
  },
  image: {
    width: '100%',
    aspectRatio: 4/3,
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: 'grey',
  },
  container: {
    margin: 10,
  },
  iconContainer: {
    position:'absolute',
    top: 40,
    left: 10,
  }
});

export default RestaurantDetailsPage;