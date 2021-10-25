import React, {Children, useState} from 'react';
import {AsyncStorage} from 'react-native';

export const AuthContext = React.createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export const loginFromApi = ({username, password}) => {
  return fetch('http://81.68.242.8/webService/login.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
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

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
  });
  return (
    <AuthContext.Provider
      value={{
        user,
        login: async ({username, password}) => {
          // const user = {username, password};
          await AsyncStorage.removeItem('user');
          const userInfo = await loginFromApi({username, password});
          if (userInfo.success == '1') {
            if (userInfo.username != null && userInfo.password != null) {
              setUser({
                username: userInfo.username,
                password: userInfo.password,
                email: userInfo.email,
              });

              await AsyncStorage.setItem('user', JSON.stringify(user));
            }
          }
          // await loginFromApi({username, password}).then(res => {
          //   if (res.success == '1') {
          //     if (res.username != null && res.password != null) {
          //       setUser({
          //         username: res.username,
          //         password: res.password,
          //         email: res.email,
          //       });

          //       AsyncStorage.setItem('user', JSON.stringify(user));
          //     }
          //   }
          // });
        },
        logout: () => {
          AsyncStorage.removeItem('user');
          setUser({username: '', password: '', email: ''});
          console.log('log out');
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
