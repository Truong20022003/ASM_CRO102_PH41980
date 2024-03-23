import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {icon} from '../../file_anh';
// {navigation}
const Top_profile = () => {
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
      {/* <Image
        source={icon.profile}
        style={{marginEnd: 7, height: 55, width: 55}}
      /> */}
    </View>
  );
};

export default Top_profile;

const styles = StyleSheet.create({});
