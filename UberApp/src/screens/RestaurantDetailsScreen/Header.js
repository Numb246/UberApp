
import { Text, View, Image,} from 'react-native'
import React from 'react'
import styles from './styles';

("");

const HeaderTitle = ({restaurant}) => {
  return (
    <View style={styles.page}>
      <Image 
      source={{uri: restaurant.image}} 
      style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
              $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
              {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>

      <Text style={styles.menuTitle}>Menu</Text>
    </View>
  )
}



export default HeaderTitle;