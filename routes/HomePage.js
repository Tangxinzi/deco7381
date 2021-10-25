import {useNavigation} from '@react-navigation/core';
import React, {useContext, useState} from 'react';
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  AsyncStorage,
  ImageBackground,
} from 'react-native';
import {Item} from '../components/Item';
import {MyCustomButton} from '../components/MyCustomBtn';
import {TitleBar} from '../components/TitleBar';
import {AuthContext} from '../Providers/AuthProvider';

export const HomePageRoute = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../images/bg.png')}
      style={{
        width: '100%',
        height: '100%',
      }}
      resizeMode="cover">
      <TitleBar />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: '5%',
        }}>
        <Item
          imageUrl={require('../images/Surprise.png')}
          text="Surprise Me"
          onPress={() => {
            const randomNum = Math.floor(Math.random() * 5) + 1;
            navigation.navigate(`st${randomNum}_main`);
          }}
        />
        <Item
          imageUrl={require('../images/choose_story.png')}
          text="Choose A Story"
          onPress={() => {
            navigation.navigate('Library');
          }}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: '15%',
        }}>
        <Item
          imageUrl={require('../images/parents.png')}
          text="A letter for parents"
          onPress={() => {
            navigation.navigate('Empty');
          }}
        />
        <Item
          imageUrl={require('../images/tut.png')}
          text="Toturial"
          onPress={() => {
            navigation.navigate('Empty');
          }}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '5%',
        }}>
        <Item
          imageUrl={require('../images/user.png')}
          text="User Center"
          onPress={() => {
            AsyncStorage.getItem('user').then(res => {
              const {username, password, email} = JSON.parse(res);
              if (username && password) {
                navigation.navigate('Profile', {username, password, email});
              }
            });
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixToText: {
    width: '55%',
    flexDirection: 'row',
    marginLeft: '20%',
    justifyContent: 'space-between',
  },
});
