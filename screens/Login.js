import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const LoginScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 30 }}>
      <View style={{ paddingTop: 40, flexDirection: 'row' }}>
        <View>
          <FontAwesome name="check-circle" size={24} color="white" />
        </View>
        <View style={{ paddingLeft: 5, paddingTop: 2 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
            Padio
          </Text>
        </View>
      </View>

      <View style={{ paddingTop: '75%' }}>
        <Text style={{ color: 'white', fontSize: 45, fontWeight: 'bold' }}>
          Listen to all the podcasts you want on your phone.
        </Text>
      </View>

      <TouchableOpacity
        style={{
          width: 320,
          height: 55,
          borderRadius: 30,
          backgroundColor: '#6C7AFE',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
          Sign in
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 320,
          height: 55,
          borderRadius: 30,
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          borderColor: 'white',
          borderWidth: 1.5,
        }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
          Sign in with twitter
        </Text>
      </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate('Channel')}> 
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 30,
        }}>
        <Text style={{ color: 'white', fontSize: 23, fontWeight: 'bold' }}>
          LOG IN
        </Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;