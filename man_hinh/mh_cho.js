import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {imgbackgr} from '../file_anh';
const Mh_cho = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Sử dụng setTimeout để đặt thời gian chờ là 3 giây (3000 miliseconds)
    const timeoutId = setTimeout(() => {
      // Chuyển hướng đến màn hình đăng nhập sau khi đợi 3 giây
      navigation.replace('Mh_dang_nhap');
    }, 3000);
    // Hủy bỏ setTimeout khi component unmount (tránh memory leaks)
    return () => clearTimeout(timeoutId);
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      <Image
        source={imgbackgr.bgrmancho}
        style={{height: '100%', width: '100%'}}
      />
    </View>
  );
};

export default Mh_cho;

const styles = StyleSheet.create({});
