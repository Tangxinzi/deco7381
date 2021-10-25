import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Image, TouchableNativeFeedback} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('Home')}
        background={TouchableNativeFeedback.Ripple(
          'rgba(0,0,0,0.2)',
          true,
          20,
        )}>
        <View style={{width: 25, height: 25}}>
          <Image
            source={require('../images/home.png')}
            style={{width: 25, height: 25}}></Image>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Home;
