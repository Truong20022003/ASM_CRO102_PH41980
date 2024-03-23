// import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabnavigation from './tabnavigation';
import Profile from '../man_hinh/profile/profile';
import Setting from '../man_hinh/setting';
import Mh_dang_nhap from '../man_hinh/mh_dang_nhap';
import Mh_dang_ky from '../man_hinh/mh_dang_ky';
import Top_profile from '../man_hinh/profile/top_profile';
import Chi_tiet_sp from '../man_hinh/chitiet/chi_tiet_sp';
import NavigationTop from './navigationTop';
import Chi_tiet_sp_shop from '../man_hinh/chitiet/shi_tiet_sp_shop';
import Mh_cho from '../man_hinh/mh_cho';
import Top_giohang from '../man_hinh/giohang/top_giohang';
import Thongbao from '../man_hinh/thongbao/thongbao';
import Lien_he from '../man_hinh/lien_he';
import BottonShop from '../man_hinh/chitiet/BottonShop';
import MyCart from '../context/myCart';
import GioiThieu from '../man_hinh/gioithieu';
// import Top_chi_tiet_sp from '../man_hinh/chi_tiet_sp/top_chi_tiet_sp';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
const Index = () => {
  return (
    // <View>
    //   <Text>index</Text>
    // </View>
    <NavigationContainer>
      <MyCart>
        <Stack.Navigator
          initialRouteName="Tabnavigation"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Mh_dang_nhap" component={Mh_dang_nhap} />
          <Stack.Screen name="Mh_dang_ky" component={Mh_dang_ky} />
          <Stack.Screen name="Tabnavigation" component={Tabnavigation} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="Top_profile" component={Top_profile} />
          <Stack.Screen name="Chi_tiet_sp" component={Chi_tiet_sp} />
          <Stack.Screen name="Chi_tiet_sp_shop" component={Chi_tiet_sp_shop} />
          <Stack.Screen name="NavigationTop" component={NavigationTop} />
          <Stack.Screen name="Mh_cho" component={Mh_cho} />
          <Stack.Screen name="Top_giohang" component={Top_giohang} />
          <Stack.Screen name="Thong_bao" component={Thongbao} />
          <Stack.Screen name="Lien_he" component={Lien_he} />
          <Stack.Screen name="BottonShop" component={BottonShop} />
          <Stack.Screen name="GioiThieu" component={GioiThieu} />
        </Stack.Navigator>
      </MyCart>
    </NavigationContainer>
  );
};

export default Index;

const styles = StyleSheet.create({});
