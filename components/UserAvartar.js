import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Button} from 'react-native-elements';

export const UserAvartar = ({
  username = 'TestUser',
  email = 'test@test.com',
}) => {
  const [state, setstate] = useState({
    photo: {
      uri: null,
    },
  });

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, response => {
      // console.log(response);
      if (response) {
        setstate({
          photo: response.assets[0],
        });
      }
    });
  };

  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
      }}>
      {state.photo.uri ? (
        <Pressable onPress={handleChoosePhoto}>
          <Image
            source={{
              uri: state.photo.uri,
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
          />
        </Pressable>
      ) : (
        <Button
          title="Choose photo"
          onPress={() => {
            handleChoosePhoto();
          }}></Button>
      )}
      <View style={styles.userInfo}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.textStyle}>{'Username: '} </Text>
          <Text style={styles.textStyle}>{username}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.textStyle}>{'Email: '}</Text>
          <Text style={styles.textStyle}>{email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfo: {
    flex: 1,
    flexDirection: 'column',
    width: '90%',
    flexBasis: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
