import { View, Text, StyleSheet, ScrollView, Image, Pressable, } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list';
import Tab from './Tab';




export default function Locate() {

    
  const [selected, setSelected] = useState("");
  
  const data = [
      {key:'1', value:'Nigeria'},
      {key:'2', value:'Germany'},
      {key:'3', value:'Canada'},
      {key:'4', value:'Belgium'},
      {key:'5', value:'U.K'},
      {key:'6', value:'U.S.A'},
      {key:'7', value:'London'},
  ];
  
  const [gender, setGender] = useState("");
  
  const datas = [
      {key:'1', value:'Male'},
      {key:'2', value:'Female'},
      {key:'3', value:'Prefer Not To Say'},
  ];
    


  return (
    
    <View style={styles.all}>

    <ScrollView>
      <View style={styles.locate}>
        <AntDesign name="arrowleft" size={30} color='#016AFB' />
        <Text style={styles.locateText}>Location</Text>
        <AntDesign name="plus" size={30} color='#016AFB' />
      </View>

      <SelectList
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        placeholder='country'
        boxStyles={styles.list}
        dropdownStyles={styles.back}
        dropdownTextStyles={styles.mytext}
        inputStyles={styles.myinput}
    />

      <SelectList 
        setSelected={(val) => setGender(val)} 
        data={datas} 
        save="value"
        placeholder='Gender'
        boxStyles={styles.list}
        dropdownStyles={styles.back}
        dropdownTextStyles={styles.mytext}
        inputStyles={styles.myinput}
       />

       <View style={styles.pick}>

       <Pressable style={styles.date}>
        <Text style={styles.set}>Set Pick Up Time</Text>
        <AntDesign name="clockcircleo" size={24} color='#016AFB' />
       </Pressable>

       <Pressable style={styles.date}>
       <Text style={styles.set}>Set Pick Up Date</Text>
       <AntDesign name="calendar" size={24} color='#016AFB' />
       </Pressable>

       </View>

       <View>
       <Image style={styles.map} source={require('../assets/map.png')} />
       <Pressable style={styles.press}>
          <Text style={styles.buttonText}>Save</Text>
      </Pressable>
        
       </View>

    </ScrollView>
     
     <Tab />

    </View>
  )
}

const styles = StyleSheet.create({
    list : {
     padding: 10,
     borderBottomColor: '#016AFB',
     borderBottomWidth: 1,
     marginBottom: 40,
     borderWidth: 0,
     marginLeft: 25,
     marginRight: 30,
    },
    back : {
     backgroundColor: '#016AFB',
     marginLeft: 35,
     marginRight: 35,
     borderWidth: 0,
    },
    mytext: {
     color: 'white',
     fontFamily: 'kanit-regular',
    },
    myinput : {
     color: '#016AFB',
     fontFamily: 'kanit-regular',
    },
    press: {
        borderRadius: 20,
        marginTop: 20,
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
      pick: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        paddingBottom: 10,
      },
      date: {
        flexDirection: 'row',
        padding: 10,
        gap: 20,
        borderWidth: 1,
        borderColor: '#016AFB',
        borderRadius: 10,
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
      map : {
        height: 350,
        width: 360,
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 10,
      },
    
   });