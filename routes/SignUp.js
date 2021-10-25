import {useNavigation} from '@react-navigation/core';
import React, {useState, useContext} from 'react';
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import {MyCustomButton} from '../components/MyCustomBtn';
import {AuthContext, loginFromApi} from '../Providers/AuthProvider';

const signUpFromApi = ({username, password, email}) => {
  return fetch('http://81.68.242.8/webService/register.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
    }),
  })
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(error => {
      console.error(error);
    });
};

const SignUp = () => {
  const [state, setstate] = useState({
    username: '',
    password: '',
    email: '',
    again_password: '',
  });

  const navigation = useNavigation();

  const {login} = useContext(AuthContext);

  const onChangeText = (key, val) => {
    setstate(prevState => {
      return {
        ...prevState,
        [key]: val,
      };
    });
  };
  const signUpAndLogin = async () => {
    const {username, password, email, again_password} = state;

    if (password == again_password) {
      await AsyncStorage.removeItem('user');
      const signUpRes = await signUpFromApi({username, password, email});
      if (signUpRes && signUpRes.success == '1') {
        const loginres = await loginFromApi({username, password});
        if (loginres.success == '1') {
          if (loginres.username != null && loginres.password != null) {
            await AsyncStorage.setItem(
              'user',
              JSON.stringify({
                username: loginres.username,
                password: loginres.password,
                email: loginres.email,
              }),
            );
          }
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          ...styles.purpleText,
          paddingTop: '15%',
          paddingBottom: '15%',
          fontSize: 30,
        }}>
        Register
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
        <Text style={styles.purpleText}>{'Email:     '}</Text>
        <TextInput
          style={styles.input}
          // placeholder="Email"
          // secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => onChangeText('email', val)}
        />
      </View>

      <View style={styles.textInputStyle}>
        <Text style={styles.purpleText}>{'Password:  '}</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          // placeholder="Password"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => onChangeText('password', val)}
        />
      </View>

      <View style={styles.textInputStyle}>
        <Text style={styles.purpleText}>{'Password:  '}</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          // placeholder="Password"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => onChangeText('again_password', val)}
        />
      </View>

      <MyCustomButton
        title="Register And Login"
        onPress={() => {
          signUpAndLogin().then(() => {
            AsyncStorage.getItem('user').then(res => {
              console.log(res);
              const {username, password, email} = JSON.parse(res);
              if (username && password) {
                navigation.navigate('Profile', {username, password, email});
              }
            });
          });
        }}
      />
    </View>
  );
};

export default SignUp;

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
});
