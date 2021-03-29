import React from 'react'
import { Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { navigationRef } from './RootNavigation';
import * as RootNavigation from '../RestaurantProje/RootNavigation';

import HomeScreen from './src/HomeScreen'
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';


const Stack = createStackNavigator()

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: 'http://foodabout-api.flycep.com/graphql/',
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
})

export default function App() {

  const onPress=() => RootNavigation.navigate('Login');

  return (
    <ApolloProvider client={client}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={ () => ({
              title: 'Home Screen',
              headerRight: () => (
                <TouchableOpacity onPress = {onPress}>
                <Image style={{width:25, height:25, marginRight: 35, marginTop:5}} source={require('../RestaurantProje/assets/profile-icon.jpg')}/>
                </TouchableOpacity>
              )
            })
          }
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={ () => ({
              title: 'Sign In',
              headerRight: () => (
                <Image style={{width:25, height:25, marginRight: 35, marginTop:5}} source={require('../RestaurantProje/assets/profile-icon.jpg')}/>
              )
            })
          }
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={ () => ({
              title: 'Register'
            })
          }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}
