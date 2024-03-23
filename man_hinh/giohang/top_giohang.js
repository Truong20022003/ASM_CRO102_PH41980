import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {icon} from '../../file_anh';
// {navigation}
const Top_giohang = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        height: 45,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={icon.back} style={{height: 35, width: 35}} />
      </TouchableOpacity>
      <Text style={{fontSize: 20, color: 'black'}}>Giỏ hàng</Text>
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            marginStart: 130,
            marginTop: 5,
          }}>
          Sửa
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}> */}
      <Image
        source={icon.comment2}
        style={{marginEnd: 0, height: 30, width: 30, tintColor: 'red'}}
      />
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default Top_giohang;

const styles = StyleSheet.create({});
