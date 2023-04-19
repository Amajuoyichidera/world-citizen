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

    <Text style={styles.com}>Community</Text>

    <View style={styles.we}>
     <Image style={styles.comImg} source={require('../assets/com.png')} />

     <View>
      <Text style={styles.share}>We share with you some {'\n'} of our outreaches around {'\n'} the globe and the impact {'\n'} of your donation world {'\n'} wide</Text>
      <Pressable style={styles.press}>
          <Text style={styles.buttonText}>Join Conversation</Text>
      </Pressable>
     </View>
    
    </View>

     <Text style={styles.com}>Location</Text>
     <Text style={styles.help}>Help us find you  by saving a perfered location for</Text>
     <Text style={styles.help}>your pick up next donation</Text>

    <Pressable onPress={() => navigation.navigate('Locate')} style={styles.save}>
      <Text style={styles.help}>Save a location</Text>
      <FontAwesome5 name="greater-than" size={24} color='#016AFB' />
    </Pressable>

    <Text style={styles.vision}>Our Visions at WELOVE</Text>
    <Text style={styles.help}>We are glad to reach out to millions of people to meet {'\n'} there immidiate clothing need, we hope to reach out {'\n'} to more people through you. Watch the short clips {'\n'} below to learn more.</Text>
   
     <View style={styles.boy}>
     <Image style={styles.old} source={require('../assets/boy.png')} />
     <Image style={styles.old} source={require('../assets/old.png')} />
     </View>
  </ScrollView>


  <View style={styles.logo}>

<Pressable>
<FontAwesome onPress={() => navigation.navigate('Home')} name="home" size={40} color='#016AFB' />
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
);
}




const styles = StyleSheet.create({
 all : {
    paddingTop: 40,
    backgroundColor: 'white',
    paddingBottom: 110,
 },
 myin : {
  flexDirection: 'row-reverse',
  backgroundColor: '#EFEEEE',
  padding: 20,
  width: 330,
  borderRadius: 30,
  marginRight: 35,
  marginTop: 30,
  marginBottom: 10,
  gap: 200,
 },
 press: {
  borderRadius: 20,
  marginTop: 20,
  padding: 13,
  // width: 310,
  // marginRight: 50,
  // marginLeft: 50,
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
com : {
  color: '#016AFB',
  fontSize: 27,
  fontFamily: 'kanit-bold',
  marginLeft: 20,
  marginBottom: 20,
  marginTop: 20,
},
comImg : {
  height: 200,
  width: 200,
  borderRadius: 10,
},
we: {
  flexDirection: 'row',
  gap: 10,
  marginLeft: 10,
},
share : {
  color: '#016AFB',
  fontSize: 15,
  fontFamily: 'kanit-regular',
},
help : {
  color: '#016AFB',
  fontSize: 16,
  fontFamily: 'kanit-regular',
  marginLeft: 17,
},
logo: {
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 60,
  paddingTop: 15,
  paddingBottom: 20,
},
logoText: {
  color: '#016AFB',
  paddingTop: 2,
  fontSize: 15,
  fontFamily: 'kanit-regular',
},
save: {
  flexDirection: 'row',
  padding: 20,
  borderWidth: 1,
  borderColor: '#016AFB',
  gap: 165,
  borderRadius: 10,
  margin: 20,
},
vision : {
  color: '#016AFB',
  fontSize: 29,
  fontFamily: 'kanit-bold',
  marginBottom: 20,
  marginTop: 20,
  textAlign: 'center',
},
boy: {
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 15,
  marginTop: 20,
  marginBottom: 20,
},
old : {
  width: 180,
  height: 180,
},
});