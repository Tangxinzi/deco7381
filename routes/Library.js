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
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../images/bg.png')}
      style={{
        width: '100%',
        height: '100%',
      }}
      resizeMode="cover">
      <ScrollView>
        <View style={styles.twoItemRow}>
          <Item
            imageUrl={require('../images/1.png')}
            text="Story 1"
            path="../images/1.png"
            onPress={() => {
              navigation.navigate('st1_main');
            }}
            haveStar={true}
          />
          <Item
            imageUrl={require('../images/2.jpg')}
            text="Story 2"
            path="../images/2.jpg"
            onPress={() => {
              navigation.navigate('st2_main');
            }}
            haveStar={true}
          />
        </View>
        <View style={{...styles.twoItemRow, marginTop: '15%'}}>
          <Item
            imageUrl={require('../images/3.jpg')}
            text="Story 3"
            path="../images/3.jpg"
            onPress={() => {
              navigation.navigate('st3_main');
            }}
            haveStar={true}
          />
          <Item
            imageUrl={require('../images/4.jpg')}
            text="Story 4"
            path="../images/4.jpg"
            onPress={() => {
              navigation.navigate('st4_main');
            }}
            haveStar={true}
          />
        </View>
        <View style={styles.twoItemRow}>
          <Item
            imageUrl={require('../images/5.jpg')}
            text="Story 5"
            path="../images/5.jpg"
            onPress={() => {
              navigation.navigate('st5_main');
            }}
            haveStar={true}
          />
          <Item
            imageUrl={require('../images/getup.jpg')}
            text="Story 6"
            path="../images/getup.jpg"
            onPress={() => navigation.navigate('Empty')}
            haveStar={true}
          />
        </View>

        <View style={styles.twoItemRow}>
          <Item
            imageUrl={require('../images/getup.jpg')}
            text="Story 7"
            path="../images/getup.jpg"
            onPress={() => navigation.navigate('Empty')}
            haveStar={true}
          />
          <Item
            imageUrl={require('../images/getup.jpg')}
            text="Story 8"
            path="../images/getup.jpg"
            onPress={() => navigation.navigate('Empty')}
            haveStar={true}
          />
        </View>

        <View style={styles.twoItemRow}>
          <Item
            imageUrl={require('../images/getup.jpg')}
            text="Story 9"
            path="../images/getup.jpg"
            onPress={() => navigation.navigate('Empty')}
            haveStar={true}
          />
          <Item
            imageUrl={require('../images/getup.jpg')}
            text="Story 10"
            path="../images/getup.jpg"
            onPress={() => navigation.navigate('Empty')}
            haveStar={true}
          />
        </View>
      </ScrollView>
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
  twoItemRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '15%',
  },
});
