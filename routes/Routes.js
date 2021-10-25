import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  AsyncStorage,
  ActivityIndicator,
  StyleSheet,
  Pressable,
} from 'react-native';
import {Button} from 'react-native-elements';
import {TitleBar} from '../components/TitleBar';
import {useState} from 'react';
import {AuthContext} from '../Providers/AuthProvider';
import {MyCustomButton} from '../components/MyCustomBtn';
import SignUpRoute from './SignUp';
import {LoginRoute} from './Login';
import {HomePageRoute} from './HomePage';
import {LibraryPageRoute} from './Library';

import St1_main from '../pages/story1/main';
import St1_story from '../pages/story1/story';
import St1_game from '../pages/story1/game';
import St1_anser_right from '../pages/story1/anser_right';
import St1_anser_failed from '../pages/story1/anser_failed';
import St1_end from '../pages/story1/end';
import St1_tips from '../pages/story1/tips';
import St1_abandon from '../pages/story1/abandon';
// st2
import St2_main from '../pages/story2/main';
import St2_story from '../pages/story2/story';
import St2_game from '../pages/story2/game';
import St2_anser_right from '../pages/story2/anser_right';
import St2_anser_failed from '../pages/story2/anser_failed';
import St2_end from '../pages/story2/end';
import St2_tips from '../pages/story2/tips';
import St2_abandon from '../pages/story2/abandon';
// st3
import St3_main from '../pages/story3/main';
import St3_story from '../pages/story3/story';
import St3_game from '../pages/story3/game';
import St3_anser_right from '../pages/story3/anser_right';
import St3_anser_failed from '../pages/story3/anser_failed';
import St3_end from '../pages/story3/end';
import St3_tips from '../pages/story3/tips';
import St3_abandon from '../pages/story3/abandon';
// st4
import St4_main from '../pages/story4/main';
import St4_story from '../pages/story4/story';
import St4_game from '../pages/story4/game';
import St4_anser_right from '../pages/story4/anser_right';
import St4_anser_failed from '../pages/story4/anser_failed';
import St4_end from '../pages/story4/end';
import St4_tips from '../pages/story4/tips';
import St4_abandon from '../pages/story4/abandon';
// st5
import St5_main from '../pages/story5/main';
import St5_story from '../pages/story5/story';
import St5_game from '../pages/story5/game';
import St5_anser_right from '../pages/story5/anser_right';
import St5_anser_failed from '../pages/story5/anser_failed';
import St5_end from '../pages/story5/end';
import St5_tips from '../pages/story5/tips';
import St5_abandon from '../pages/story5/abandon';
import Home from '../components/Home';
import {EmptyPageRoute} from './EmptyPage';
import {ProfilePageRoute} from './Profile';

const Stack = createNativeStackNavigator();

function Login() {
  return (
    <ImageBackground
      source={require('../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <View>
        <TitleBar />
        <LoginRoute />
      </View>
    </ImageBackground>
  );
}

function Register() {
  return (
    <ImageBackground
      source={require('../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <TitleBar />
      <SignUpRoute />
    </ImageBackground>
  );
}

function Welcome() {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Login');
      }}>
      <ImageBackground
        source={require('../images/welcome.jpg')}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}></ImageBackground>
    </Pressable>
  );
}

const restHeaderOptions = {
  headerTransparent: true,
  headerShadowVisible: false,
  headerTintColor: '#7e25db',
  headerTitleAlign: 'center',
  headerRight: () => <Home />,
};

export const Routes = () => {
  const [loading, setLoading] = useState(true);
  const {user, login, logout} = useContext(AuthContext);

  useEffect(() => {
    AsyncStorage.getItem('user').then(userString => {
      // login();
      if (userString) {
        // decode and login
        // logout();
        // console.log(userString);
      }
      setLoading(false);
    });
    return () => {};
  }, []);

  if (loading) {
    return <ActivityIndicator size="large"></ActivityIndicator>;
  }

  return (
    <NavigationContainer>
      {
        <Stack.Navigator initialRouteName={'Welcome'}>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="Home"
            component={HomePageRoute}
            options={{
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="Library"
            component={LibraryPageRoute}
            options={{
              title: 'Library',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}></Stack.Screen>

          <Stack.Screen
            name={'Profile'}
            component={ProfilePageRoute}
            options={{
              title: 'Profile',
              ...restHeaderOptions,
            }}></Stack.Screen>

          <Stack.Screen
            component={EmptyPageRoute}
            name="Empty"
            options={{
              title: 'EMPTY',
              ...restHeaderOptions,
            }}></Stack.Screen>

          {/* story_1 */}
          <Stack.Screen
            name="st1_main"
            component={St1_main}
            options={{
              title: 'GOOD MORNING',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st1_story"
            component={St1_story}
            options={{
              title: 'GOOD MORNING',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st1_game"
            component={St1_game}
            options={{
              title: 'GOOD MORNING',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st1_anser_right"
            component={St1_anser_right}
            options={{
              title: 'Congrats',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st1_anser_failed"
            component={St1_anser_failed}
            options={{
              title: 'Boom!',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st1_end"
            component={St1_end}
            options={{
              title: 'The End',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st1_tips"
            component={St1_tips}
            options={{
              title: 'Tips',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st1_abandon"
            component={St1_abandon}
            options={{
              title: 'Give up',
              ...restHeaderOptions,
            }}></Stack.Screen>
          {/* story_2 */}
          <Stack.Screen
            name="st2_main"
            component={St2_main}
            options={{
              title: 'Little Red Riding Hood',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st2_story"
            component={St2_story}
            options={{
              title: 'Little Red Riding Hood',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st2_game"
            component={St2_game}
            options={{
              title: 'Little Red Riding Hood',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st2_anser_right"
            component={St2_anser_right}
            options={{
              title: 'Congrats',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st2_anser_failed"
            component={St2_anser_failed}
            options={{
              title: 'Boom!',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st2_end"
            component={St2_end}
            options={{
              title: 'The End',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st2_tips"
            component={St2_tips}
            options={{
              title: 'Tips',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st2_abandon"
            component={St2_abandon}
            options={{
              title: 'Give up',
              ...restHeaderOptions,
            }}></Stack.Screen>
          {/* story_3 */}
          <Stack.Screen
            name="st3_main"
            component={St3_main}
            options={{
              title: 'Who’s her?',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st3_story"
            component={St3_story}
            options={{
              title: 'Who’s her?',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st3_game"
            component={St3_game}
            options={{
              title: 'Who’s her?',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st3_anser_right"
            component={St3_anser_right}
            options={{
              title: 'Congrats',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st3_anser_failed"
            component={St3_anser_failed}
            options={{
              title: 'Boom!',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}></Stack.Screen>
          <Stack.Screen
            name="st3_end"
            component={St3_end}
            options={{
              title: 'The End',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st3_tips"
            component={St3_tips}
            options={{
              title: 'Tips',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st3_abandon"
            component={St3_abandon}
            options={{
              title: 'Give up',
              ...restHeaderOptions,
            }}></Stack.Screen>
          {/* story_4 */}
          <Stack.Screen
            name="st4_main"
            component={St4_main}
            options={{
              title: 'The first programmer',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st4_story"
            component={St4_story}
            options={{
              title: 'The first programmer',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st4_game"
            component={St4_game}
            options={{
              title: 'The first programmer',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st4_anser_right"
            component={St4_anser_right}
            options={{
              title: 'Congrats',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st4_anser_failed"
            component={St4_anser_failed}
            options={{
              title: 'Boom!',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st4_end"
            component={St4_end}
            options={{
              title: 'The End',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st4_tips"
            component={St4_tips}
            options={{
              title: 'Tips',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st4_abandon"
            component={St4_abandon}
            options={{
              title: 'Give up',
              ...restHeaderOptions,
            }}></Stack.Screen>
          {/* story_5 */}
          <Stack.Screen
            name="st5_main"
            component={St5_main}
            options={{
              title: 'The first computer “Bug”',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st5_story"
            component={St5_story}
            options={{
              title: 'The first computer “Bug”',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st5_game"
            component={St5_game}
            options={{
              title: 'The first computer “Bug”',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st5_anser_right"
            component={St5_anser_right}
            options={{
              title: 'Congrats',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st5_anser_failed"
            component={St5_anser_failed}
            options={{
              title: 'Boom!',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st5_end"
            component={St5_end}
            options={{
              title: 'The End',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st5_tips"
            component={St5_tips}
            options={{
              title: 'Tips',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st5_abandon"
            component={St5_abandon}
            options={{
              title: 'Give up',
              ...restHeaderOptions,
            }}></Stack.Screen>
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};
