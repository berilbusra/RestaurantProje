import React from 'react';
import {View, ImageBackground} from 'react-native';
import LoginComponent from './components/LoginComponent'
import SocialLoginComponent from './components/SocialLoginComponent'
import { StyleSheet } from 'react-native'



function LoginScreen() {
    return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/background-image.jpg')} style={styles.image}>
            <SocialLoginComponent />
            <LoginComponent />
        </ImageBackground>
     </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
      },
      image: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover'
      }
  })
  
export default LoginScreen;
