import {useNavigation} from '@react-navigation/core';
import React, {useContext, useState} from 'react';
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  AsyncStorage,
  Touchable,
  Pressable,
} from 'react-native';
import {MyCustomButton} from '../components/MyCustomBtn';
import {AuthContext} from '../Providers/AuthProvider';

export const LoginRoute = () => {
  const {login, user} = useContext(AuthContext);
  const navigation = useNavigation();
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const onChangeText = (key, val) => {
    setState(prevState => ({...prevState, [key]: val}));
  };
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          ...styles.purpleText,
          paddingTop: '15%',
          paddingBottom: '15%',
          fontSize: 30,
        }}>
        Login
      </Text>
      <View style={styles.textInputStyle}>
        <Text style={styles.purpleText}>{'Username: '}</Text>
        <TextInput
          style={styles.input}
          // placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => onChangeText('username', val)}
        />
      </View>
      <View style={styles.textInputStyle}>
        <Text style={styles.purpleText}>{'Password: '}</Text>
        <TextInput
          style={styles.input}
          // placeholder="Password"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => onChangeText('password', val)}
        />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '10%',
          justifyContent: 'space-around',
        }}>
        <MyCustomButton
          title="Login"
          color="red"
          onPress={() => {
            AsyncStorage.removeItem('user');
            login(state).then(() => {
              AsyncStorage.getItem('user').then(res => {
                const {username, password, email} = JSON.parse(res);
                if (username && password) {
                  navigation.navigate('Profile', {username, password, email});
                }
              });
            });

            // console.log(user);
          }}
        />

        <MyCustomButton
          title="Register"
          onPress={() => {
            navigation.navigate('Register');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 55,
    // backgroundColor: '#42A5F5',

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'purple',
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
    // width: '55%',
    flexDirection: 'row',
    // marginLeft: '20%',
    justifyContent: 'space-between',
    // flex: 1,
  },
  purpleText: {
    color: 'purple',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  textInputStyle: {
    flexDirection: 'row',
    marginLeft: '5%',
    marginRight: '5%',
    alignContent: 'center',
  },
  btnStyle: {},
});
