import { StyleSheet, View, FlatList } from "react-native";
import RestaurantItem from "./src/components/RestaurantItem";
import restaurants from "./assets/data/restaurants.json";
export default function HomeScreen() {
  return (
    <View>
      <FlatList 
      data={restaurants}
      renderItem={({item}) => {return (<RestaurantItem restaurant={item} />)}}
      showsVerticalScrollIndicator={false}/>
    </View>
  );
}

const styles = StyleSheet.create({});
