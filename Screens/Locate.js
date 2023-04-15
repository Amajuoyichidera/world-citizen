import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list';



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
    
    <View>

    <ScrollView>
    <View>
        <Text>Location</Text>
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

    </ScrollView>
     

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
   });