import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {icon} from '../file_anh';
import {useNavigation} from '@react-navigation/native';
const Top_home = props => {
  const navigation = useNavigation();
  return (
    // <View style={{height: 210, backgroundColor: 'white'}}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ffffff',
        height: 50,
      }}>
      <TouchableOpacity>
        <Image source={icon.menu} style={{height: 40, width: 40}} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Image source={icon.profile} style={{height: 50, width: 50}} />
      </TouchableOpacity>
    </View>
  );
};
{
  /* </View> */
}
export default Top_home;

const styles = StyleSheet.create({});
