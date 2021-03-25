import * as React from 'react';
import {View, Text, ScrollView, StyleSheet } from 'react-native';

import MenuCategoriesList from './MenuCategoriesList'
import RestaurantsList from './RestauranstList'

function HomeScreen() {
  return (
    <View style={{flex:1}}>
      <ScrollView>
        <Text style={styles.header}>Food Categories</Text>
        <MenuCategoriesList />
        <Text style={styles.header}>Restaurants in the region</Text>
       <RestaurantsList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    padding:10,
    fontSize: 16
  }
})
  
export default HomeScreen;
