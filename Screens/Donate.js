import { StyleSheet, Text, View , Image, Pressable} from 'react-native';

export default function Donate({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/donate.png')} />
        <Text style={styles.cloth}>CLOTHE DONATION MADE EASY!</Text>
        <Text style={styles.we}>We help you achive your goal of contributing to {"\n"} people who need clothes accross the world  </Text>
      </View>


      <View style={styles.all}>
         <Text  onPress={() => navigation.navigate('We')} style={styles.skip}>Skip</Text>
         <Text onPress={() => navigation.navigate('Find')} style={styles.skip}>Next</Text>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    paddingTop: 100,
    backgroundColor: 'white',
    paddingBottom: 100,
 },
 cloth : {
    color: '#016AFB',
    paddingTop: 30,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 19,
    fontFamily: 'kanit-bold',
 },
 we :{
    color: '#016AFB',
    fontSize: 17,
    paddingLeft: 25,
    paddingTop: 30,
    fontFamily: 'kanit-regular',
 },
 all : {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: 120,
    gap: 70,
 },
 skip: {
    color: '#016AFB',
    fontWeight: '700',
    fontSize: 19,
    fontFamily: 'kanit-bold',
 }
});