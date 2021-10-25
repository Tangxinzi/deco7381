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
  ScrollView,
} from 'react-native';
import {Item} from '../components/Item';
import {MyCustomButton} from '../components/MyCustomBtn';
import {TitleBar} from '../components/TitleBar';
import {AuthContext} from '../Providers/AuthProvider';

export const LibraryPageRoute = () => {
  return (
    <ImageBackground
      source={require('../images/bg.png')}
      style={{
        width: '100%',
        height: '100%',
      }}
      resizeMode="cover">
      <ScrollView>
        <TitleBar />
        <View style={styles.twoItemRow}>
          <Item
            imageUrl={require('../images/Surprise.png')}
            text="Surprise Me"
          />
          <Item imageUrl={require('../images/2.jpg')} text="Choose A Story" />
        </View>
        <View style={{...styles.twoItemRow, marginTop: '15%'}}>
          <Item
            imageUrl={require('../images/3.jpg')}
            text="A letter for parents"
          />
          <Item imageUrl={require('../images/4.jpg')} text="Toturial" />
        </View>
        <View style={styles.twoItemRow}>
          <Item imageUrl={require('../images/5.jpg')} text="User Center" />
          <Item imageUrl={require('../images/5.jpg')} text="User Center" />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});
