import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  Feather,
} from '@expo/vector-icons';

const MusicScreen = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: 'black', padding: 30 }}>
        <View style={{ paddingTop: 45, flexDirection: 'row' }}>
          <Feather name="chevron-left" size={24} color="white" />

          <Feather
            name="more-vertical"
            size={24}
            color="white"
            style={{ paddingLeft: '90%' }}
          />
        </View>

        <View
          style={{
            paddingTop: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/paint1.jpeg')}
            style={{ height: 300, width: 300, borderRadius: 140 }}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '15%',
          }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
            The Reason Behind Polars
          </Text>
          <Text style={{ color: '#434343', fontSize: 22, paddingTop: 10 }}>
            Paul Finn
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 25,
            flexDirection: 'row',
          }}>
          <Feather name="skip-back" size={24} color="white" />
          <Feather
            name="play"
            size={24}
            color="white"
            style={{ paddingLeft: 45 }}
          />
          <Feather
            name="skip-forward"
            size={24}
            color="white"
            style={{ paddingLeft: 45 }}
          />
        </View>

        <View style={{ flexDirection: 'row', paddingTop: 50 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>44:34</Text>
          <Text style={{ color: 'white', paddingLeft: 240, fontSize: 18 }}>
            56:23
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#161616',
            marginTop: 50,
            height: 150,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
          }}>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
            Downloads
          </Text>
          <View style={{ flexDirection: 'row', paddingTop: 20 }}>
            <View>
              <Image
                source={require('../assets/images.jpeg')}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 10,
                  paddingTop: 20,
                }}
              />
            </View>
            <View style={{ paddingLeft: 20 }}>
              <Text style={{ fontSize: 20, color: 'white' }}>
                Basics of Shapes
              </Text>
              <Text style={{ fontSize: 18, color: 'white', paddingTop: 10 }}>
                Design Dai
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default MusicScreen;