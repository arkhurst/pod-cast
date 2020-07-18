import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';

const ChanelScreen = () => {
  return (
    <View style={{ flex: 1, padding: 30, backgroundColor: 'black' }}>
      <View style={{ paddingTop: 60, flexDirection: 'row' }}>
        <View style={{ flex: 9 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>
            Hey Alex,
          </Text>
          <Text style={{ color: '#434343', paddingTop: 5, fontSize: 20 }}>
            14th November, 2019
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Image
            source={require('../assets/images.jpeg')}
            style={{ width: 40, height: 40, borderRadius: 30 }}
          />
        </View>
      </View>

      <ScrollView horizontal={true} style={{ paddingTop: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              width: 120,
              height: 120,
              backgroundColor: '#6C7AFE',
              borderRadius: 20,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Feather name="trending-up" color="white" size={24} />
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
              Trending
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 120,
              height: 120,
              backgroundColor: '#ED5172',
              borderRadius: 20,
              borderWidth: 1,
              marginLeft: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome name="gamepad" color="white" size={24} />
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
              Games
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 120,
              height: 120,
              backgroundColor: '#F38847',
              borderRadius: 20,
              borderWidth: 1,
              marginLeft: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Feather name="tablet" color="white" size={24} />
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
              Technology
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={{ paddingBottom: '5%', paddingTop: '-20%' }}>
        <Text style={{ color: '#808080', fontSize: 20, fontWeight: 'bold' }}>
          Subscribed
        </Text>
      </View>

      <ScrollView horizontal={true} style={{ paddingBottom: '1%' }}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image
              source={require('../assets/paint1.jpeg')}
              style={{
                width: 120,
                height: 120,
                borderWidth: 1,
                borderRadius: 20,
              }}
            />
            <Text style={{ color: 'white', paddingTop: 5, fontSize: 20 }}>
              The reason..
            </Text>
            <Text style={{ color: 'white', paddingTop: 5, fontSize: 15 }}>
              Paul Finn
            </Text>
          </View>
          <View>
            <Image
              source={require('../assets/paint2.jpeg')}
              style={{
                width: 120,
                height: 120,
                borderWidth: 1,
                borderRadius: 20,
                marginLeft: 10,
              }}
            />
            <Text
              style={{
                color: 'white',
                paddingTop: 5,
                fontSize: 20,
                paddingLeft: 11,
              }}>
              Basics of Sh..
            </Text>
            <Text
              style={{
                color: 'white',
                paddingTop: 5,
                fontSize: 15,
                paddingLeft: 11,
              }}>
              Paul Finn
            </Text>
          </View>
          <View>
            <Image
              source={require('../assets/paint3.jpeg')}
              style={{
                width: 120,
                height: 120,
                borderWidth: 1,
                borderRadius: 20,
                marginLeft: 10,
              }}
            />
            <Text
              style={{
                color: 'white',
                paddingTop: 5,
                fontSize: 20,
                paddingLeft: 11,
              }}>
              Meeting
            </Text>
            <Text
              style={{
                color: 'white',
                paddingTop: 5,
                fontSize: 15,
                paddingLeft: 11,
              }}>
              UX Design
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={{ paddingBottom: '5%', paddingTop: '-2%' }}>
        <Text style={{ color: '#808080', fontSize: 20, fontWeight: 'bold' }}>
          Top Channels
        </Text>
      </View>

      <ScrollView
        horizontal={true}
        style={{ paddingBottom: '-1%', paddingTop: '-5%' }}>
        <View style={{ flexDirection: 'row', paddingTop: '-1%' }}>
          <View>
            <Image
              source={require('../assets/cartoon1.jpeg')}
              style={{
                width: 120,
                height: 120,
                borderWidth: 1,
                borderRadius: 60,
              }}
            />
          </View>
          <View>
            <Image
              source={require('../assets/cartoon2.png')}
              style={{
                width: 120,
                height: 120,
                borderWidth: 1,
                borderRadius: 60,
                marginLeft: 10,
              }}
            />
          </View>
          <View>
            <Image
              source={require('../assets/cartoon3.png')}
              style={{
                width: 120,
                height: 120,
                borderWidth: 1,
                borderRadius: 60,
                marginLeft: 10,
              }}
            />
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '10%',
        }}>
        <Feather
          name="home"
          color="#616EE6"
          size={24}
          //    style={{paddingRight:5}}
        />
        <Feather
          name="search"
          color="white"
          size={24}
          style={{ paddingLeft: 70 }}
        />
        <Feather
          name="send"
          color="white"
          size={24}
          style={{ paddingLeft: 70 }}
        />
        <Feather
          name="settings"
          color="white"
          size={24}
          style={{ paddingLeft: 70 }}
        />
      </View>
    </View>
  );
};
export default ChanelScreen;