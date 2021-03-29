import React from 'react';
import { ImageBackground, StyleSheet} from 'react-native';
import {View, Text, Button, Image } from 'react-native-ui-lib';
import LoginComponent from './components/LoginComponent'
import SocialLoginComponent from './components/SocialLoginComponent'


function LoginScreen() {
    return (
    <View flex>
        <ImageBackground source={require('../assets/background-image.jpg')} style={styles.image}>
          <View style={{ flexDirection: 'column', alignItems: 'center'}}>
            <SocialLoginComponent />
            <LoginComponent />
          </View>
        </ImageBackground>
     </View>
    );
}

const styles = StyleSheet.create({
      image: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover'
      }
  })
  
export default LoginScreen;
