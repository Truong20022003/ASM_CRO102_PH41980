import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {icon} from '../../file_anh';
import {useNavigation} from '@react-navigation/native';
const Top = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: '100%',
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={icon.back} style={{height: 30, width: 30}} />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingHorizontal: 10,
          width: 200,
        }}>
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            borderRadius: 50,
            backgroundColor: '#f0f0f5',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Image
            style={{height: 20, width: 20, alignSelf: 'center'}}
            source={{
              uri: 'https://img.icons8.com/?size=24&id=90282&format=png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            borderRadius: 50,
            backgroundColor: '#f0f0f5',
            justifyContent: 'center',
            alignSelf: 'center',
            marginHorizontal: 10,
          }}>
          <Image
            style={{height: 20, width: 20, alignSelf: 'center'}}
            source={{uri: 'https://img.icons8.com/?size=50&id=9671&format=png'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            borderRadius: 50,
            backgroundColor: '#f0f0f5',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Image
            style={{height: 20, width: 20, alignSelf: 'center'}}
            source={{
              uri: 'https://img.icons8.com/?size=80&id=fcLkM6xyUJ6l&format=png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({});
