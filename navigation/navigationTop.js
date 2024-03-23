import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {icon} from '../file_anh';
import {useNavigation} from '@react-navigation/native';
const NavigationTop = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        height: 60,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={icon.back} style={{height: 40, width: 40}} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Image
          source={icon.profile}
          style={{marginEnd: 7, height: 55, width: 55}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavigationTop;

const styles = StyleSheet.create({});
