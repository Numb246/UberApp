import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Auth,DataStore } from 'aws-amplify';
import {User} from '../../models';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const {dbUser}= useAuthContext();

  const [name,setName] = useState(dbUser?.name ||"");
  const [address, setAddress] = useState(dbUser?.address ||"");
  const [lat, setLat] = useState(dbUser?.lat+ "" || "0");
  const [lng, setLng] = useState(dbUser?.lng+ "" || "0");


  const {sub, setDbUser} = useAuthContext(); 

  const navigation = useNavigation();

  const onSave = async () => {
    if (dbUser){
      await updateUser();
    } else{
      await createUser();
    }    
    navigation.goBack();
  };

  const updateUser = async () => {
    const user =await DataStore.save(
      User.copyOf(dbUser, (updated) =>{
        updated.name=name;
        updated.address=address;
        updated.lat=parseFloat(lat);
        updated.lng=parseFloat(lng);      
      })
    )
    setDbUser(user);
  };

  const createUser= async() => {
    try{
      const user = await DataStore.save(new User({
        name, 
        address, 
        lat: parseFloat(lat), 
        lng: parseFloat(lng), 
        sub,
      })
    );
    setDbUser(user);
    } catch(e){
      Alert.alert("Error",e.message)
    }
  }


  return (
    <SafeAreaView>
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
      onPress={onSave} title='Save'/>
      <Text 
      style = {{color: 'red', textAlign:'center', margin: 10}}
      onPress = {() => Auth.signOut()}
      >
          SIGN OUT
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    title: {
        fontWeight:'bold',
        fontSize: 30,
        margin: 10,
        textAlign: 'center',
    },
    input: {
      margin:10,
      backgroundColor: 'white',
      padding:15,
      borderRadius:5,
    },

})