/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const App = () => {
  
  const LoadingView = ()=>{
    return (
      <View style={styles.body}>
        <Text>Loading</Text>
      </View>
    )
  }

  const ShowCamera = ()=>{
    return (
      <Camera
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        device={device}
        isActive={true}
      />
    )
  }

  const devices = useCameraDevices()
  const device = devices.back;

  if (device == null) return <LoadingView />
  return (
    <ShowCamera />
  )

};

const styles = StyleSheet.create({
  body:{
    flex: 1,
  },
  preview:{
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});

export default App;
