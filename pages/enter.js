/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';

const Enter = ({navigation}) => {
  console.log(navigation);
  return (
    <View>
      <Text>BedTime stories for sleepy girls</Text>
      <Button
        title="1"
        onPress={() => navigation.push('st1_main', {idx: 1})}></Button>
      <Button title="2" onPress={() => navigation.push('st2_main', {idx: 2})}>
        Two
      </Button>
      <Button title="3" onPress={() => navigation.push('st3_main', {idx: 3})}>
        Three
      </Button>
      <Button title="4" onPress={() => navigation.push('st4_main', {idx: 4})}>
        Four
      </Button>
      <Button title="5" onPress={() => navigation.push('st5_main', {idx: 5})}>
        Five
      </Button>
    </View>
  );
};

export default Enter;
