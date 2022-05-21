import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { Auth } from 'aws-amplify'

export default function ProfileScreen() {
    const [name,setName] = useState('')
    const [address, setAddress] = useState('')
    const [lat, setLat] = useState('0')
    const [lng, setLng] = useState('0')
    
    const onSaveHandler = () => {

    }

    const onSignOutHandler = () => {

    }

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Profile</Text>
      <View style={styles.inputContainer}>
        <TextInput
        value={name}
        style={styles.input}
        placeholder='Name'
        onChangeText={setName}
        />
        <TextInput
        value={address}
        style={styles.input}
        placeholder='Address'
        onChangeText={setAddress}
        />
        <TextInput
        value={lat}
        style={styles.input}
        placeholder='0' 
        onChangeText={setLat}
        keyboardType='numeric'
        />
        <TextInput
        value={lng}
        style={styles.input}
        placeholder='0' 
        onChangeText={setLng}
        keyboardType='numeric'
        />
      </View>
      <Button 
      style={styles.button}
      onPress={onSaveHandler}>
          SAVE
      </Button>
      <Text 
      style = {{color: 'red', textAlign:'center', margin: 10}}
      onPress = {() => Auth.signOut()}
      >
          SIGN OUT
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column'
    },
    inputContainer: {
        
    },
    title: {
        fontWeight:'bold',
        fontSize: 30,
        marginTop: 70,
        textAlign: 'center',
    },
    input: {
        backgroundColor: 'white',
        marginVertical: 15,
    },
    button: {
        backgroundColor:'lightblue',
    }
})