import { StyleSheet, Text, View, FlatList } from "react-native";

const BasketDishItem = ({ basketDish }) => {
  console.log(basketDish);
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>
          {basketDish.quatity != null
            ? basketDish.quatity
            : basketDish.quantity}
        </Text>
      </View>
      <Text style={{ fontWeight: "600" }}>{basketDish.Dish.name}</Text>
      <Text style={{ marginLeft: "auto" }}>$ {basketDish.Dish.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    paddingVertical: 1,
    marginRight: 10,
    borderRadius: 3,
  },
});

export default BasketDishItem;
