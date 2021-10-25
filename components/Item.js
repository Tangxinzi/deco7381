import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable, AsyncStorage} from 'react-native';
import {Button} from 'react-native-elements';

const Styles = StyleSheet.create({
  container: {
    width: '40%',

    // margin: 30,
    // padding: 30,
  },
  itemStyle: {
    width: 'auto',
    height: 100,
  },
  textStyle: {
    color: 'purple',
    // flexShrink: 1,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

export const Item = ({imageUrl, text, path, remarks, onPress, haveStar = false}) => {
  const [state, setstate] = useState({
    imagePath: require('../images/star_empty.jpg'),
    starFull: false,
    user: {}
  });
  const fetchData = (type, remarks) => {
    AsyncStorage.getItem('user').then((response) => {
      response = JSON.parse(response)
      fetch(`http://81.68.242.8/webService/Favorite.php?type=${ type }&id=${ Math.round(Math.random()*1000000) }&username=${ response.username }&remarks=${ JSON.stringify(remarks) }`)
      .then(json => {
        if (json.ok) {
          alert('success')
        }
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
  return (
    <View style={Styles.container}>
      <Pressable onPress={onPress}>
        <Image source={imageUrl} style={Styles.itemStyle} />
        {
          <View
            style={{
              // flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignContent: 'stretch',
            }}>
            <Text style={Styles.textStyle}>{text}</Text>
            {haveStar && (
              <Pressable
                onPress={() => {
                  if (!state.starFull) {
                    console.log('set');
                    console.log(imageUrl);
                    fetchData('insert', {
                      path,
                      text,
                      remarks
                    })
                    setstate({
                      imagePath: require('../images/star.jpg'),
                      starFull: true,
                    });
                  } else {
                    console.log('del');
                    setstate({
                      imagePath: require('../images/star_empty.jpg'),
                      starFull: false,
                    });
                  }
                }}>
                <Image
                  source={state.imagePath}
                  style={{
                    width: 30,
                    height: 30,
                    marginTop: 20,
                  }}
                />
              </Pressable>
            )}
          </View>
        }
      </Pressable>
    </View>
  );
};
