import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import CuisinesList from './CuisinesList';
import RestaurantsList from './RestauranstList'

function HomeScreen() {
  return (
    <View style={{flex:1}}>
      <ScrollView>
        <Text style={{fontWeight: 'bold', padding:10, fontSize: 16}}>Food Categories</Text>
        <CuisinesList />
        <Text style={{fontWeight: 'bold', padding:10, fontSize: 16}}>Restaurants in the region</Text>
       <RestaurantsList />
      </ScrollView>
    </View>
  );
}
export default HomeScreen;
