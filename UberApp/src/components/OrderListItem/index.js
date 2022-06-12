import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Order", { id: order.id });
  };

  return (
    <Pressable
      onPress={onPress}
      style={{ flexDirection: "row", margin: 10, alignItemsL: "center" }}
    >
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{ width: 75, height: 75, marginRight: 10 }}
      />

      <View>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          {order.Restaurant.name}
        </Text>
        <Text style={{ marginVertical: 5 }}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </Pressable>
  );
};

export default OrderListItem;
