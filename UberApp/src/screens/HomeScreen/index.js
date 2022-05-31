import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import RestaurantItem from "../../components/RestaurantItem";


export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <View style={styles.page}>
      <FlatList 
      data={restaurants}
      renderItem={({item}) => {return (<RestaurantItem restaurant={item} />)}}
      showsVerticalScrollIndicator={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  }
});
