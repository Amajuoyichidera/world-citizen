import { StyleSheet, Text, View , Image, TouchableOpacity, Pressable, TextInput} from 'react-native';
import React from 'react';




export default function Things({ navigation }) {

return (
  <View style={styles.all}>
       <Text style={styles.you}>THINGS YOU SHOULD KNOW</Text>

       <Text style={styles.accord}>In accordance with the  governing body of {'\n'} Setore clothe donation platform. We have {'\n'} set some certain standards as to what {'\n'} qualities of clothes should be donated on {'\n'} this platform.</Text>
       
       <View style={styles.year}>
         <Text style={styles.dot}>•</Text>
         <Text style={styles.cloth}>Clothes older than one year should not be {'\n'} donated on this platform.</Text>
       </View>

       <View style={styles.year}>
         <Text style={styles.dot}>•</Text>
         <Text style={styles.cloth}>Torn clothes are not permitted on this {'\n'} platform.</Text>
       </View>

       <View style={styles.year}>
         <Text style={styles.dot}>•</Text>
         <Text style={styles.cloth}>We value quality over dedication to the {'\n'} course.</Text>
       </View>

       <View style={styles.year}>
         <Text style={styles.dot}>•</Text>
         <Text style={styles.cloth}> We only deliver to the less privilege {'\n'} not your rich relatives.</Text>
       </View>

       <View style={styles.year}>
         <Text style={styles.dot}>•</Text>
         <Text style={styles.cloth}>You only permited to pick a country or {'\n'} continent you will like to donate to.</Text>
       </View>

       <View style={styles.year}>
         <Text style={styles.dot}>•</Text>
         <Text style={styles.cloth}>All cash donated to the platoform will {'\n'} only be used to buy clothes for the less {'\n'} privileges.</Text>
       </View>

       <Pressable onPress={() => navigation.navigate('Home')} style={styles.press}>
         <Text style={styles.buttonText}>Continue</Text>
       </Pressable>

  </View>
);
}




const styles = StyleSheet.create({
 all : {
    paddingTop: 80,
    backgroundColor: 'white',
    paddingBottom: 100,
 },
 you : {
    color: '#016AFB',
    fontFamily: 'kanit-bold',
    textAlign: 'center',
    fontSize: 25,
    paddingBottom: 20,
 },
 accord: {
    color: '#016AFB',
    fontFamily: 'kanit-regular',
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 50,
    fontSize: 16,
 },
 year : {
    flexDirection : 'row',
    gap: 20,
    marginLeft: 30,
    paddingBottom: 20,
 },
 dot : {
    color: '#016AFB',
    fontSize: 20,
 },
 cloth : {
    color: '#016AFB',
    fontFamily: 'kanit-regular',
    fontSize: 16,
 },
 press: {
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 30,
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