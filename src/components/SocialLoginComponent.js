import React from 'react';
import {  StyleSheet, TouchableOpacity} from "react-native";
import {View, Text, Image } from 'react-native-ui-lib';

const SocialLoginComponent = () => {
  return (
    <View margin-15 paddingB-15 style={{borderBottomColor: '#B2B2B2' , borderBottomWidth:1, alignItems: 'center'}}>
        <Text style={styles.text}>with your social network </Text>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.googleButton}>
                <Image style={styles.g_icon} source={require('../../assets/google-icon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.facebookButton}>
                <Image style={styles.f_icon} source={require('../../assets/facebook-icon.png')}/>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    text: {
      color:'#B2B2B2',
      fontSize: 15,
      textAlign: 'center',
      marginBottom:5
    },
    googleButton:{
      width:160,
      height:55,
      backgroundColor: '#DD4B39',
      justifyContent: 'center',
      margin: 5,
      borderRadius: 50
    },
    facebookButton:{
      width:160,
      height:55,
      backgroundColor: '#3B5998',
      justifyContent: 'center',
      margin: 5,
      borderRadius:50
  },
  g_icon:{
      padding:10,
      width:20,
      height: 20 ,
      alignSelf: 'center',
  },
  f_icon:{
      width:15,
      height: 25 ,
      alignSelf: 'center',
  },
});

export default SocialLoginComponent;