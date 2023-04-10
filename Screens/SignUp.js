import { StyleSheet, Text, View , Image, Pressable, TextInput} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../Screens/useTogglePasswordVisibility';
import { SelectList } from 'react-native-dropdown-select-list'



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
  ]
  
  const [gender, setGender] = useState("");
  
  const datas = [
      {key:'1', value:'Male'},
      {key:'2', value:'Female'},
      {key:'3', value:'Prefer Not To Say'},
  ]

return (
  <View>
      <View>
          <Text>WELCOME</Text>
          <Text>We are exited you are here, kindly fil in your details below!</Text>
      </View>

      <View  style={styles.mail}>
          <TextInput
             style={styles.input}
              placeholder="Name"
              keyboardType= 'default'
              />        
  
          <TextInput
             style={styles.input}
              placeholder="Email"
              keyboardType= 'default'
              />
          
      <TextInput
        style={styles.inputField}
        name="password"
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="newPassword"
        secureTextEntry={passwordVisibility}
        value={password}
        enablesReturnKeyAutomatically
        onChangeText={text => setPassword(text)}
      />
      <Pressable onPress={handlePasswordVisibility}>
        <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
      </Pressable>

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

      
  </View>
);
}




const styles = StyleSheet.create({

});