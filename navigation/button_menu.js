import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {icon} from '../file_anh';

const Button_menu = () => {
  return (
    <View
      style={{
        height: 65,
        backgroundColor: 'rgb(255, 243, 225)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopEndRadius: 60,
        borderTopStartRadius: 60,
      }}>
      <TouchableOpacity>
        <Image source={icon.home} style={{height: 50, width: 50}} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={icon.giohang} style={{height: 50, width: 50}} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={icon.love} style={{height: 50, width: 50}} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={icon.chuong} style={{height: 50, width: 50}} />
      </TouchableOpacity>
    </View>
  );
};

export default Button_menu;

const styles = StyleSheet.create({});
