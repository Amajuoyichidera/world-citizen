import { StyleSheet, Text, View , Image, TouchableOpacity, Pressable, TextInput} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../Screens/useTogglePasswordVisibility';
import { SelectList } from 'react-native-dropdown-select-list';
import Checkbox from 'expo-checkbox';



export default function Find({ navigation }) {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
  useTogglePasswordVisibility();
  const [password, setPassword] = useState('');
  

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

  const [agree, setAgree] = useState(false);

return (
  <View style={styles.all}>
      <View>
          <Text style={styles.well1}>WELCOME</Text>
          <Text style={styles.well}>We are exited you are here, kindly fil in {'\n'} your details below!</Text>
      </View>

      <View  style={styles.mail}>
          <TextInput
             style={styles.input}
              placeholder="Name"
              keyboardType= 'default'
              placeholderTextColor = "#0096C7"
              />        
  
          <TextInput
             style={styles.input}
              placeholder="Email"
              keyboardType= 'default'
              placeholderTextColor = "#0096C7"
              />
      
      <View style={styles.pass}>
      <TextInput
        style={styles.inputField}
        name="password"
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="newPassword"
        secureTextEntry={passwordVisibility}
        value={password}
        // enablesReturnKeyAutomatically
        onChangeText={text => setPassword(text)}
        placeholderTextColor = "#0096C7"
      />
      <Pressable onPress={handlePasswordVisibility}>
        <MaterialCommunityIcons name={rightIcon} size={22} color='#016AFB' />
      </Pressable>
      </View>
     
      </View>

      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        placeholder='country'
    />

      <SelectList 
        setSelected={(val) => setGender(val)} 
        data={datas} 
        save="value"
        placeholder='Gender'
       />
      
      <View>
       <Checkbox value={agree} onValueChange={setAgree} color={'#016AFB'} />
       <Text>Agree To Terms And Condition</Text>
      </View>
       
       <Pressable>
         <Text>Register</Text>
       </Pressable>
      
      <View>
       <Text> Already have an account? </Text>
       <Pressable>
         <Text>Sign In</Text>
       </Pressable>
      </View>
       
  </View>
);
}




const styles = StyleSheet.create({
 all : {
  backgroundColor: 'white',
  paddingTop: 100,
 },
 well : {
  textAlign: 'center',
  color: '#016AFB',
 },
 well1: {
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#016AFB',
  paddingBottom: 20,
 },
 pass : {
  flexDirection: 'row',
  gap: 200,
  justifyContent: 'space-around',
  padding: 10,
  borderBottomColor: '#016AFB',
  borderBottomWidth: 1,
  marginBottom: 20,
  marginLeft: 35,
  marginRight: 35,
  marginTop: 20,
 },
 input : {
  padding: 10,
  borderBottomColor: '#016AFB',
  borderBottomWidth: 1,
  marginBottom: 20,
  marginLeft: 35,
  marginRight: 35,
  marginTop: 20,
 }
});