import {useNavigation} from '@react-navigation/core';
import React, {useContext, useState} from 'react';
import {View, Button, TextInput, Text, ImageBackground} from 'react-native';

export const EmptyPageRoute = () => {
  return (
    <ImageBackground
      source={require('../images/bg.png')}
      style={{
        width: '100%',
        height: '100%',
      }}>
      <Text>This is a empty page!</Text>
    </ImageBackground>
  );
};
