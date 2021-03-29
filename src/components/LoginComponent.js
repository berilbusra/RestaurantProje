import React, {useState}from 'react';
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {View, Text } from 'react-native-ui-lib';
import * as RootNavigation from '../../RootNavigation';

import CheckBox from '@react-native-community/checkbox';

import { gql, useMutation } from '@apollo/client'

const TOKEN_AUTH = gql`
mutation tokenAuth($email: String, $password: String) {
    login(email: $email, password: $password){
        token
        user {
          id
          firstName
          email
        }
    }
}
`
const LoginComponent = () => {
  const onPress=() => RootNavigation.navigate('Register');
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false)

  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const [login, { loading, error }] = useMutation(TOKEN_AUTH, {
    onCompleted:(data) => {
      /*          **/
     },
     onError: (error) => {
       console.log(error);
     }, 
    variables: {
      email: email,
      password: password,
    }
  });

  if (loading) return <Text>Loading.. </Text>;
  if (error) return <Text>An error occurred</Text>;
  return (
    <SafeAreaView >
      <View flexstyle={{flexDirection: 'column', padding:10}}>
        <TextInput
            style={styles.inputview}
            onChangeText={(value) => onChangeEmail(value)}
            value={email}
            placeholder="Username / E-mail / Phone Number "
            inlineImagePadding={15}
            inlineImageLeft= 'usericon' />

        <TextInput
            style={styles.inputview}
            onChangeText={(value) => onChangePassword(value)}
            value={password}
            placeholder="Password "
            inlineImagePadding={15}
            inlineImageLeft= 'unlockicon'
            secureTextEntry={true}/>
      </View>

      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <CheckBox
            style={styles.checkbox}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
        <Text style={styles.smalltext}>Remember Me</Text>
      
        <TouchableOpacity>
            <Text style={styles.smalltext}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signinButton} onPress={() => login()}>
        <Text style={styles.signintext}  >Sign In</Text> 
      </TouchableOpacity>

      <View style={{flexDirection: 'row',  alignSelf: 'center', marginTop:5}}>
        <CheckBox
            style={styles.checkbox}
            disabled={false}
            value={toggleCheckBox2}
            onValueChange={(newValue) => setToggleCheckBox2(newValue)}/>
        <Text style={styles.termsconditions}> I accept the</Text>
        <Text style={styles.termsconditions2}> terms and conditions</Text>

        <TouchableOpacity onPress = {onPress}>
          <Text style={styles.signuptext}>Sign Up</Text>
        </TouchableOpacity>
     </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputview:{
      width: 350,
      height: 45,
      borderColor: '#F6F7F8',
      borderWidth:2,
      borderRadius: 50,
      alignSelf: 'center',
      margin: 10,
      padding: 10
  },
  signinButton:{
      width:350,
      height:55,
      backgroundColor: '#F6BD2F',
      justifyContent: 'center',
      margin: 5,
      borderRadius: 50,
      alignSelf: 'center',
      margin:10
  },
  signintext: {
      color:'black',
      fontSize: 20,
      textAlign: 'center',
  },
  smalltext: {
      color:'#B2B2B2',
      fontSize: 15,
      textAlign: 'center',
      marginRight:80,
      marginLeft:10,
      marginBottom:10
  },
  termsconditions: {
      color:'#B2B2B2',
      fontSize: 15,
      textAlign: 'center',
      marginLeft:5
  },
  termsconditions2: {
      color:'#FFD26F',
      fontSize: 15,
      textAlign: 'center',
      marginRight: 40
  },
  signuptext: {
      color:'#9B9B9B',
      fontWeight: 'bold',
      fontSize: 17,
      textAlign: 'right',
      marginRight:100,
      
  },
  checkbox:{
      alignSelf: 'flex-start',
      width: 20,
      height:20,
      marginLeft:90
  }
});

export default LoginComponent;