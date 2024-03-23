import {Alert, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {icon} from '../../file_anh';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
const Itemshop = props => {
  let {id, name, url, gia, diachi, daban, sao} = props.products;
  const formatPrice = price => {
    // Sử dụng toLocaleString để thêm dấu chấm phân cách mỗi 3 số
    return price.toLocaleString('en-US');
  };
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View
        style={st.item}
        onTouchEnd={() => {
          navigation.navigate('Chi_tiet_sp_shop', {
            selectedItem: props.products,
          });
          // Alert.alert('lol');
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{
              flex: 0.7,
              width: 'auto',
              height: '80%',
              resizeMode: 'cover',
              overflow: 'hidden', // Tránh tràn ảnh
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
              alignSelf: 'stretch',
            }}
            source={{uri: url}}
          />
          <Text
            style={{
              flex: 0.255,
              color: 'black',
              fontSize: 12,
              alignContent: 'center',
              fontFamily: 'Open Sans, sans-serif',
            }}>
            {name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginStart: 5,
              }}>
              <Image
                source={icon.star}
                style={{height: 15, width: 13, marginRight: 3}}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 12,
                }}>
                {sao}/5
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Image
                source={icon.giohang2}
                style={{height: 15, width: 15, marginEnd: 10}}
              />
              <Image
                source={icon.tim}
                style={{height: 15, width: 15, marginEnd: 10}}
              />
            </View>
          </View>
          <View
            style={{
              flex: 0.08,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingBottom: 4,
            }}>
            <Text
              style={{
                color: 'red',
                fontSize: 12,
                fontFamily: 'Open Sans, sans-serif',
              }}>
              đ<Text style={{fontSize: 15}}>{formatPrice(gia)}</Text>
            </Text>
            <Text style={{color: 'black', fontSize: 11}}>Đã bán {daban}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Itemshop;
const st = StyleSheet.create({
  item: {
    // marginBottom: 5,
    marginTop: 10,
    textAlign: 'left',
    height: 280,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 1,
        shadowRadius: 20,
      },
      android: {
        elevation: 6, // Độ cao của shadow
      },
      default: {
        // Trong trường hợp nền tảng không được hỗ trợ
        // không làm gì cả hoặc sử dụng một giải pháp thay thế
      },
    }),
  },
});
