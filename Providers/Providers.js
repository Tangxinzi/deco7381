import React from 'react';
import {View, Text} from 'react-native';
import {Routes} from '../routes/Routes';
import {AuthProvider} from './AuthProvider.js';

function Providers() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default Providers;
