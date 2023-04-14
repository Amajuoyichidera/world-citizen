import { StyleSheet, Text, View , Image, TouchableOpacity, Pressable, TextInput} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../Screens/useTogglePasswordVisibility';
import { SelectList } from 'react-native-dropdown-select-list';
import Checkbox from 'expo-checkbox';



export default function SignUp({ navigation }) {
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
          <Text style={styles.well}>We are exited you are here, kindly fill in {'\n'} your details below!</Text>
      </View>

      <View  style={styles.mail}>
          <TextInput
             style={styles.input}
              placeholder="Name"
              keyboardType= 'default'
              placeholderTextColor = '#016AFB'
              />        
  
          <TextInput
             style={styles.input1}
              placeholder="Email"
              keyboardType= 'default'
              placeholderTextColor = '#016AFB'
              />
      
     
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
        placeholderTextColor = '#016AFB'
      />
      <Pressable onPress={handlePasswordVisibility}>
        <MaterialCommunityIcons name={rightIcon} size={22} color='#016AFB' />
      </Pressable>
      </View>
      
      <View style={styles.check}>
       <Checkbox value={agree} onValueChange={setAgree} color={'#016AFB'} />
       <Text style={styles.box}>Agree To Terms And Condition</Text>
      </View>
       
       <Pressable style={styles.press}>
         <Text style={styles.buttonText}>Register</Text>
       </Pressable>
      
      <View style={styles.have}>
       <Text style={styles.account}> Already have an account? </Text>
       <Pressable>
         <Text onPress={() => navigation.navigate('SignIn')} style={styles.sin}>Sign In</Text>
       </Pressable>
      </View>
       
  </View>
);
}




const styles = StyleSheet.create({
 all : {
  backgroundColor: 'white',
  paddingTop: 80,
 },
 well : {
  textAlign: 'center',
  color: '#016AFB',
  fontFamily: 'kanit-regular',
  fontSize: 16,
 },
 well1: {
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#016AFB',
  paddingBottom: 20,
  fontFamily: 'kanit-bold',
  fontSize: 30,
 },
 pass : {
  flexDirection: 'row',
  gap: 200,
  justifyContent: 'space-around',
  padding: 10,
  borderBottomColor: '#016AFB',
  borderBottomWidth: 1,
  marginBottom: 40,
  marginLeft: 35,
  marginRight: 35,
  // marginTop: 20,
 },
 input : {
  padding: 10,
  borderBottomColor: '#016AFB',
  borderBottomWidth: 1,
  marginBottom: 20,
  marginLeft: 35,
  marginRight: 35,
  marginTop: 20,
  fontFamily: 'kanit-regular',
 },
 input1 : {
  padding: 10,
  borderBottomColor: '#016AFB',
  borderBottomWidth: 1,
  marginBottom: 40,
  marginLeft: 35,
  marginRight: 35,
  marginTop: 20,
  fontFamily: 'kanit-regular',
 },
 inputField: {
  fontFamily: 'kanit-regular',
 },
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
 check : {
  flexDirection: 'row',
  gap: 20,
  marginLeft: 40,
  marginBottom: 30,
 },
 box : {
  color: '#016AFB',
  fontFamily: 'kanit-bold',
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
have: {
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 30,
  paddingBottom: 100,
  paddingTop: 10,
},
account : {
  color: '#016AFB',
  fontFamily: 'kanit-medium',
  fontSize: 16,
},
sin : {
  color: '#016AFB',
  fontFamily: 'kanit-bold',
  fontSize: 17,
  marginTop: -3,
}
});