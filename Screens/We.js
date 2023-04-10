import { StyleSheet, Text, View , Image, Pressable} from 'react-native';

export default function We({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/we.png')} />
        <Text style={styles.we}>WE LOVE</Text>
      </View>

      <Pressable  onPress={() => navigation.navigate('Donate')} style={styles.press}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 200,
    backgroundColor: 'white',
  },
  we : {
    color: '#016AFB',
    paddingTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'kanit-bold',
  },
  press: {
    borderRadius: 30,
    marginTop: 250,
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
