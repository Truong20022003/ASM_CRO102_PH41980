import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Reload = () => {
  return (
    <View style={{padding: 10}}>
      <View
        style={{width: '100%', height: 200, backgroundColor: '#d4d4d4'}}></View>
      <View style={{padding: 15}}>
        <Text
          style={{
            width: '80%',
            height: 10,
            backgroundColor: '#d4d4d4',
            marginBottom: 10,
          }}></Text>
        <Text
          style={{
            width: '80%',
            height: 10,
            backgroundColor: '#d4d4d4',
            marginBottom: 10,
          }}></Text>
        <Text
          style={{
            width: '70%',
            height: 10,
            backgroundColor: '#d4d4d4',
          }}></Text>
      </View>
    </View>
  );
};

export default Reload;

const styles = StyleSheet.create({});
