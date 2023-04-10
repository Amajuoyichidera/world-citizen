import { StyleSheet, Text, View , Image, Pressable} from 'react-native';

export default function Cash({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.find} source={require('../assets/cash.png')} />
        <Text style={styles.cloth}>DONATE IN FORM OF CASH!</Text>
        <Text style={styles.we}>Dont worry, we allow you donate clothes just in {'/n'} case you dont habe clothes to donate </Text>
      </View>


      <View style={styles.all}>
         <Text onPress={() => navigation.navigate('We')} style={styles.skip}>Skip</Text>
         <Text onPress={() => navigation.navigate('SignUp')} style={styles.skip}>Next</Text>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        backgroundColor: 'white',
        paddingBottom: 150,
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
 },
 find : {
    marginLeft: 30,
  },
});