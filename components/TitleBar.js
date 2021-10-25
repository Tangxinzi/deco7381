import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const TitleBar = ({emptyTop}) => {
  return (
    <View
      style={
        emptyTop && {
          marginTop: '10%',
        }
      }>
      <Text
        style={{
          textAlign: 'center',
          color: 'blue',
          fontSize: 35,
          fontWeight: 'bold',
        }}>
        {'BedTime Stories'.toUpperCase()}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'purple',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {'for sleepy girls'.toUpperCase()}
      </Text>
    </View>
  );
};
