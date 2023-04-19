import { View, Text, ScrollView, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { FontAwesome, FontAwesome5, Entypo, MaterialCommunityIcons, AntDesign  } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../Screens/useTogglePasswordVisibility';


export default function Card({ navigation }) {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
    const [password, setPassword] = useState('');


  return (
    <View style={styles.all}>
      <ScrollView>

      <View style={styles.locate}>
        <AntDesign onPress={() => navigation.navigate('Home')} name="arrowleft" size={30} color='#016AFB' />
        <Text style={styles.locateText}>Card Details</Text>
        <AntDesign name="plus" size={30} color='#016AFB' />
      </View>
    
      <Image style={styles.card} source={require('../assets/card.jpg')} />     
  
          <TextInput
             style={styles.input1}
              placeholder="Card Name"
              keyboardType= 'default'
              placeholderTextColor = '#016AFB'
              />

            <TextInput
             style={styles.input1}
              placeholder="Card Number"
              keyboardType= 'default'
              placeholderTextColor = '#016AFB'
              />

            <TextInput
             style={styles.input1}
              placeholder="Amount"
              keyboardType= 'default'
              placeholderTextColor = '#016AFB'
              />
      


     <View style={styles.pass}>
      <TextInput
        style={styles.inputField}
        name="password"
        placeholder="Pin"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="newPassword"
        secureTextEntry={passwordVisibility}
        value={password}
        // enablesReturnKeyAutomatically
        onChangeText={text => setPassword(text)}
        placeholderTextColor = '#016AFB'
      />
      <Pressable onPress={handlePasswordVisibility}>
        <MaterialCommunityIcons name={rightIcon} size={22} color='#016AFB' />
      </Pressable>
      </View>

      <Pressable style={styles.press}>
          <Text style={styles.buttonText}>Donate</Text>
      </Pressable>

      </ScrollView>

      <View style={styles.logo}>

       <Pressable>
       <FontAwesome  onPress={() => navigation.navigate('Home')} name="home" size={40} color='#016AFB' />
       <Text style={styles.logoText}>Home</Text>
       </Pressable>

       <View>
       <FontAwesome5 name="hand-holding-heart" size={40} color='#016AFB' />
       <Text style={styles.logoText}>Donate</Text>
       </View>

       <View>
       <Entypo onPress={() => navigation.navigate('Card')} name="credit-card" size={40} color='#016AFB' />
       <Text style={styles.logoText}>Card</Text>
       </View>

       <View>
       <MaterialCommunityIcons onPress={() => navigation.navigate('Account')} name="account" size={40} color='#016AFB' />
       <Text style={styles.logoText}>Account</Text>
       </View>
       
       </View>
    </View>
  )
}


const styles = StyleSheet.create({
    press: {
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 20,
        padding: 13,
        width: 200,
        marginLeft: 100,
        backgroundColor: '#016AFB',
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'kanit-bold',
      },
      all : {
        paddingTop: 80,
        backgroundColor: 'white',
        paddingBottom: 120,
      },
      locate: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingBottom: 30,
      },
      set: {
        paddingTop: 4,
        color: '#016AFB',
        fontFamily: 'kanit-regular',
      },
      locateText: {
        fontFamily: 'kanit-bold',
        color: '#016AFB',
        fontSize: 25,
      },
      logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 60,
        paddingTop: 20,
        paddingBottom: 20,
      },
      logoText: {
        color: '#016AFB',
        paddingTop: 2,
        fontSize: 15,
        fontFamily: 'kanit-regular',
      },
      card: {
        width: 400,
        height: 230,
        marginLeft: 7,
      },
      
       pass : {
        flexDirection: 'row',
        gap: 270,
        justifyContent: 'space-around',
        padding: 10,
        borderBottomColor: '#016AFB',
        borderBottomWidth: 1,
        marginBottom: 40,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
       },
       input1 : {
        padding: 10,
        borderBottomColor: '#016AFB',
        borderBottomWidth: 1,
        marginBottom: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        fontFamily: 'kanit-regular',
       },
       inputField: {
        fontFamily: 'kanit-regular',
       },
    
   });