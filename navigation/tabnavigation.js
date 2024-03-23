import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Shop from '../man_hinh/shoplist/shop';
import Love from '../man_hinh/love/love';
import {Icon, icon} from '../file_anh';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Thongbao from '../man_hinh/thongbao/thongbao';
import Giohang from '../man_hinh/giohang/giohang';
import Home from '../man_hinh/home/home';
const Tab = createBottomTabNavigator();
const option = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: '#ff00bf', // Màu sắc của tab khi được chọn
  tabBarInactiveTintColor: 'gray', // Màu sắc của tab khi không được chọn
  tabBarLabelStyle: {
    fontSize: 13, // Kích thước chữ của nhãn tab
    fontWeight: '400', // Độ đậm của chữ
  },
  tabBarStyle: {
    backgroundColor: 'white', // Màu nền của thanh tab
    borderRadius: 18,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 6,
    height: 45,
    paddingVertical: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: -20, // Độ lệch đổ bóng theo trục x (ngang) - bên trái
      height: -20, // Độ lệch đổ bóng theo trục y (dọc)
    },
    shadowOpacity: 0.7,
    shadowRadius: 11.95,
    elevation: 5,
    // Đổ bóng bên phải
    shadowColor: 'black',
    shadowOffset: {
      width: 20, // Độ lệch đổ bóng theo trục x (ngang) - bên phải
      height: 20, // Độ lệch đổ bóng theo trục y (dọc)
    },
    shadowOpacity: 0.7,
    shadowRadius: 11.95,
    elevation: 5,
  },
  tabBarIcon: ({focused, color, size}) => {
    let url;
    let iconSize;
    if (route.name === 'Home') {
      url = focused
        ? 'https://img.icons8.com/?size=50&id=2797&format=png'
        : 'https://img.icons8.com/?size=50&id=73&format=png'; // Dùng cùng một icon cho cả trạng thái active và inactive
    } else if (route.name === 'Shop') {
      // Cung cấp hình ảnh tương ứng cho tab "Shop"
      url = focused
        ? 'https://img.icons8.com/?size=50&id=8287&format=png'
        : 'https://img.icons8.com/?size=50&id=489&format=png';
    } else if (route.name === 'Yêu thích') {
      // Cung cấp hình ảnh tương ứng cho tab "Love"
      url = focused
        ? 'https://img.icons8.com/?size=48&id=HAYn0IWXcl7X&format=png'
        : 'https://img.icons8.com/?size=80&id=yydb76lTrba9&format=png';
    } else if (route.name === 'Giỏ hàng') {
      // Cung cấp hình ảnh tương ứng cho tab "Thongbao"
      url = focused
        ? 'https://img.icons8.com/?size=50&id=9720&format=png'
        : 'https://img.icons8.com/?size=50&id=9671&format=png';
    }

    // else if (route.name === 'Shop') {
    //   // Cung cấp hình ảnh tương ứng cho tab "Shop"
    //   source = focused ? icon.bag_tui : icon.bag_tui;
    // } else if (route.name === 'Yêu thích') {
    //   // Cung cấp hình ảnh tương ứng cho tab "Love"
    //   source = focused ? icon.love : icon.love;
    // } else if (route.name === 'Giỏ hàng') {
    //   // Cung cấp hình ảnh tương ứng cho tab "Thongbao"
    //   source = focused ? icon.giohang : icon.giohang;
    // }

    return (
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            // backgroundColor: focused ? '#f2f2f2' : '#fff', //f2f2f2
            // height: focused ? 50 : 'auto',
            width: focused ? 50 : 'auto',
            borderTopWidth: focused ? 3 : 0,
            borderColor: '#ff00bf',

            // bottom: -18,
            top: -6,
            position: focused ? 'absolute' : 'relative',
          }}
        />
        <Image
          source={{uri: url}}
          style={{
            // width: focused ? 35 : size,
            // height: focused ? 35 : size,
            width: size,
            height: size,
            tintColor: focused ? '#ff00bf' : 'gray',
          }}
        />
      </View>
    );
  },
});
const Tabnavigation = props => {
  return (
    <Tab.Navigator screenOptions={option}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Giỏ hàng" component={Giohang} />
      <Tab.Screen name="Yêu thích" component={Love} />
    </Tab.Navigator>
  );
};

export default Tabnavigation;

const styles = StyleSheet.create({});
