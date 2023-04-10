import { StyleSheet, Text, View , Image, Pressable} from 'react-native';

export default function Find({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.find} source={require('../assets/find.png')} />
        <Text style={styles.cloth}>YOU DON’T HAVE TO FIND US,WE {"\n"} WILL LOCATE YOU!</Text>
        <Text style={styles.we}>We are glad to pick up your clothe wherever you{"\n"} want. Just enter a saved location </Text>
      </View>


      <View style={styles.all}>
         <Text onPress={() => navigation.navigate('We')} style={styles.skip}>Skip</Text>
         <Text onPress={() => navigation.navigate('Earn')} style={styles.skip}>Next</Text>
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
 find : {
   marginLeft: 20,
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