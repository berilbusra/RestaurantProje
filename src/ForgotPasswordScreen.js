import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, Text, ScrollView } from "react-native";

function ForgotPasswordScreen() {
  const [firstName, onChangeFirstName] = React.useState("");
  const [lastName, onChangeLastName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return (
    <ScrollView style={{flexDirection: 'column', padding:10}}>
      <Text style={styles.infotext}> Please registered in the system enter your phone / e-mail information!</Text>
      <TextInput
        style={styles.inputview}
        onChangeText={(value) => onChangeFirstName(value)}
        value={firstName}
        placeholder="First Name"
        inlineImagePadding={15}
        inlineImageLeft= 'usericon' />
      <TextInput
        style={styles.inputview}
        onChangeText={(value) => onChangeLastName(value)}
        value={lastName}
        placeholder="Last Name "
        inlineImagePadding={15}
        inlineImageLeft= 'usericon' />
      <TextInput
        style={styles.inputview}
        onChangeText={(value) => onChangeEmail(value)}
        value={email}
        placeholder="E-mail"
        inlineImagePadding={15}
        inlineImageLeft= 'usericon' />
      <TextInput
        style={styles.inputview}
        onChangeText={(value) => onChangePassword(value)}
        value={password}
        placeholder="Password"
        inlineImagePadding={15}
        inlineImageLeft= 'usericon'
        secureTextEntry={true}/>
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendtext}>Send</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputview:{
    width: 350,
    height: 55,
    borderColor: '#F6F7F8',
    borderWidth:2,
    borderRadius: 50,
    alignSelf: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: 'white'
  },
  sendButton:{
      width:350,
      height:55,
      backgroundColor: '#F6BD2F',
      justifyContent: 'center',
      margin: 5,
      borderRadius: 50,
      alignSelf: 'center',
      margin:10
  },
  sendtext: {
      color:'black',
      fontSize: 20,
      textAlign: 'center',
  },
  infotext: {
    color: '#9B9B9B',
    fontSize: 17,
    textAlign: 'center',
    margin:50
  }
  })
  
export default ForgotPasswordScreen;
