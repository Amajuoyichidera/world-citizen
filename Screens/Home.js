import { StyleSheet, Text, View , Image, ScrollView, Pressable, TextInput} from 'react-native';
import React from 'react';
import { FontAwesome, FontAwesome5,  MaterialIcons, Entypo, MaterialCommunityIcons  } from '@expo/vector-icons';






export default function Home({ navigation }) {

return (
  <View style={styles.all}>

   <ScrollView>

   <View style={styles.myin}>
      <MaterialIcons name="search" size={24} color='#016AFB' />
      <TextInput
               style={styles.input}
                placeholder="Search"
                keyboardType= 'default'
                placeholderTextColor={'#016AFB'}
                />      
    </View>

    <Text>Community</Text>

    <View>
     <Image source={require('../assets/com.png')} />
     <View>
      <Text>We share with you some {'\n'} of our outreaches around {'\n'} the globe and the impact {'\n'} of your donation world {'\n'} wide</Text>
     </View>
     <Pressable style={styles.press}>
          <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>

     <Text>Location</Text>
     <Text>Help us find you  by saving a perfered location for {'\n'}  your pick up next donation</Text>
    <Pressable>
      <Text>Save a location</Text>
      <FontAwesome5 name="greater-than" size={24} color="black" />
    </Pressable>

    <Text>Our Visions at WELOVE</Text>
    <Text>We are glad to reach out to millions of people to meet {'\n'} there immidiate clothing need, we hope to reach out {'\n'} to more people through you. Watch the short clips {'\n'} below to learn more.</Text>
   
     <View>
     <Image source={require('../assets/boy.png')} />
     <Image source={require('../assets/old.png')} />

     </View>
  </ScrollView>

       <View>
       <FontAwesome onPress={() => navigation.navigate('Things')} name="home" size={50} color='#016AFB' />
       <FontAwesome5 name="hand-holding-heart" size={24} color="black" />
       <Entypo name="credit-card" size={24} color="black" />
       <MaterialCommunityIcons name="account" size={24} color="black" />

       </View>

   

  </View>
);
}




const styles = StyleSheet.create({
 all : {
    paddingTop: 40,
    backgroundColor: 'white',
    paddingBottom: 100,
 },
 myin : {
  flexDirection: 'row-reverse',
  backgroundColor: '#EFEEEE',
  padding: 20,
  width: 330,
  borderRadius: 30,
  marginRight: 35,
  marginTop: 30,
  marginBottom: 30,
  gap: 200,
 },
 press: {
  borderRadius: 30,
  // marginTop: 250,
  padding: 20,
  width: 310,
  marginRight: 50,
  marginLeft: 50,
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
});