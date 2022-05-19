import { StyleSheet, Text, View, Image,Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RestaurantItem = ({ restaurant }) => {
  const navigation= useNavigation();

  const onPress =() => {
    navigation.navigate("Restaurant", {id: restaurant.id});
  };

  return (
    <Pressable onPress={onPress} style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
  row: {
    flexDirection: 'row',
    alignItems:'center',
  },
  rating:{
    backgroundColor:'lightgrey',
    width:30,
    height:30,
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:'auto', //dịch hết sang phải
  }
});
