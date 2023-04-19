import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome, FontAwesome5, Entypo, MaterialCommunityIcons, AntDesign,  Ionicons, Fontisto  } from '@expo/vector-icons';

export default function Account({ navigation }) {
  return (
    <View style={styles.all}>
       <ScrollView style={styles.myscroll}>

       <View style={styles.locate}>
        <AntDesign style={styles.back} onPress={() => navigation.navigate('Home')} name="arrowleft" size={30} color='#016AFB' />
        <Text style={styles.locateText}>Account</Text>
      </View>

      <View style={styles.mail}>
        <Text style={styles.test}>Email</Text>
        <Ionicons name="md-pencil" size={24} color='#016AFB' />
      </View>

      <View style={styles.mail}>
        <Text style={styles.test}>Password</Text>
        <Ionicons name="md-pencil" size={24} color='#016AFB' />
      </View>

      <View style={styles.mail}>
        <Text style={styles.test}>Appearance</Text>
        <Ionicons name="md-pencil" size={24} color='#016AFB' />
      </View>

      <View style={styles.mail}>
        <Text style={styles.test}>Notifications</Text>
        <AntDesign name="bells" size={24} color='#016AFB' />
      </View>

      <View style={styles.mail}>
        <Text style={styles.test}>Language</Text>
        <Fontisto name="world" size={24} color='#016AFB' />
      </View>

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
      all : {
        paddingTop: 80,
        backgroundColor: 'white',
        paddingBottom: 120,
      },
      locate: {
        flexDirection: 'row',
        paddingBottom: 30,
        gap: 50,
        marginLeft: 100,
      },
      locateText: {
        fontFamily: 'kanit-bold',
        color: '#016AFB',
        fontSize: 25,
      },
      back :{
        paddingTop: 5,
      },
      mail : {
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 250,
        marginBottom: 20,
        borderBottomColor: '#016AFB',
        borderBottomWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 10,
      },
      test: {
        color: '#016AFB',
        fontFamily: 'kanit-regular',
        fontSize: 17,
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
      myscroll: {
        paddingBottom: 200,
      }
   });