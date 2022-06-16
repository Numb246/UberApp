import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, LogBox } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsScreen from "./src/screens/RestaurantDetailsScreen";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";
import Basket from "./src/screens/Basket";
import OrdersScreen from "./src/screens/OrdersScreen";
import OrderDetails from "./src/screens/OrderDetails";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";
import { withAuthenticator } from "aws-amplify-react-native";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import AuthContextProvider from "./src/contexts/AuthContext";
import BasketContextProvider from "./src/contexts/BasketContext";
import OrderContextProvider from "./src/contexts/OrderContext";
import React from "react";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

LogBox.ignoreAllLogs();

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <BasketContextProvider>
          <OrderContextProvider>
            <RootNavigator />
          </OrderContextProvider>
        </BasketContextProvider>
      </AuthContextProvider>

      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
