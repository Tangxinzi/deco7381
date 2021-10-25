import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useContext, useState, useEffect} from 'react';
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
import {HorizontalItem} from '../components/HorizontalItem';
import {Item} from '../components/Item';
import {MyCustomButton} from '../components/MyCustomBtn';
import {TitleBar} from '../components/TitleBar';
import {AuthContext} from '../Providers/AuthProvider';
import PagerView from 'react-native-pager-view';
import {UserAvartar} from '../components/UserAvartar';

export const ProfilePageRoute = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {username, password, email} = route.params;
  const [state, setState] = useState({
    favorite: []
  });
  const fetchData = () => {
    AsyncStorage.getItem('user').then((response) => {
      response = JSON.parse(response)
      fetch(`http://81.68.242.8/webService/Favorite.php?type=&username=${ response.username }`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(json => {
        for (var i = 0; i < json.result.length; i++) {
          json.result[i].remarks = JSON.parse(json.result[i].remarks)
        }
        // console.log(json.result[0]['remarks']['path']);

        setState(prevState => ({...prevState, favorite: json.result}));
      })
      .catch(error => {
        console.error(error);
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .done();
  }
  fetchData()
  return (
    <ImageBackground
      source={require('../images/bg.png')}
      style={{
        width: '100%',
        height: '100%',
      }}
      resizeMode="cover">
      <TitleBar emptyTop={true} />
      <UserAvartar username={username} email={email} />
      <View
        style={{justifyContent: 'space-between', width: '100%', height: '90%'}}>
        <View
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <View>
            <Text style={styles.textStyle} onPress={() => {
              navigation.navigate('Library');
            }}>Library</Text>
          </View>
          <View>
            <Text style={styles.textStyle}>History</Text>
          </View>

          <PagerView style={styles.viewPager} initialPage={0}>
            <View
              key="1"
              style={{
                flexDirection: 'row',
                // height: '100%',
              }}>
              <HorizontalItem
                imageUrl={require('../images/1.png')}
                text="Good Morning"></HorizontalItem>
              <HorizontalItem
                imageUrl={require('../images/1.png')}
                text="Good Morning"></HorizontalItem>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // height: '100%',
                // flex: 1,
              }}
              key="2">
              <HorizontalItem
                imageUrl={require('../images/1.png')}
                text="Good Morning"></HorizontalItem>
              <HorizontalItem
                imageUrl={require('../images/1.png')}
                text="Good Morning"></HorizontalItem>
            </View>
          </PagerView>

          <View>
            <Text style={styles.textStyle}>Favourites</Text>
          </View>
          <PagerView style={styles.viewPager} initialPage={0}>
            <View
              key="1"
              style={{
                flexDirection: 'row',
              }}>
              {
                state.favorite && state.favorite.map((item, key) => {
                  var i = "../images/1.png"
                  // var i = item.remarks.path ? item.remarks.path : "../images/1.png"
                  return (
                    <HorizontalItem imageUrl={require(i)} text={ item.remarks.text }></HorizontalItem>
                  )
                })
              }
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}
              key="2">
              <HorizontalItem
                imageUrl={require('../images/1.png')}
                text="Good Morning"></HorizontalItem>
              <HorizontalItem
                imageUrl={require('../images/1.png')}
                text="Good Morning"></HorizontalItem>
            </View>
          </PagerView>
        </View>
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
  twoItemRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '15%',
  },
  viewPager: {
    flexBasis: 130,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    paddingLeft: 20,
    color: 'blue',
    flexShrink: 1,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
});
