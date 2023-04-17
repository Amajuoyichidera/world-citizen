import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome, FontAwesome5,  MaterialIcons, Entypo, MaterialCommunityIcons  } from '@expo/vector-icons';

export default function Tab() {
  return (
      <View style={styles.logo}>
       <View>
       <FontAwesome onPress={() => navigation.navigate('Things')} name="home" size={40} color='#016AFB' />
       <Text style={styles.logoText}>Home</Text>
       </View>

       <View>
       <FontAwesome5 name="hand-holding-heart" size={40} color='#016AFB' />
       <Text style={styles.logoText}>Donate</Text>
       </View>

       <View>
       <Entypo name="credit-card" size={40} color='#016AFB' />
       <Text style={styles.logoText}>Card</Text>
       </View>

       <View>
       <MaterialCommunityIcons name="account" size={40} color='#016AFB' />
       <Text style={styles.logoText}>Account</Text>
       </View>
       
       </View>
  )
}



const styles = StyleSheet.create({
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
   });