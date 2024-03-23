import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {icon} from '../../file_anh';
import {useCart} from '../../context/myCart';

const Itemlove = props => {
  const {id, name, url, gia, mota, sao} = props.data;
  const {
    addlove,
    setaddlove,
    getlove,
    addToCart,
    setAddToCart,
    removeFromCart,
    removeFromLove,
  } = useCart();
  console.log(sao, name);
  const xoa = () => {
    console.log(id);
    removeFromLove(id);
  };
  return (
    <View
      style={{
        flex: 1,
        marginBottom: 200,
        marginTop: 55,
        marginHorizontal: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: url,
          }}
          style={{
            height: 500,
            width: '100%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
        <Image
          source={icon.tim2}
          style={{right: 50, height: 40, width: 40, top: 10}}
        />
        <TouchableOpacity
          onPress={() => {
            xoa();
          }}
          style={{end: 120, top: 10}}>
          <Image
            source={{
              uri: 'https://img.icons8.com/?size=24&id=K7OXfoF0zHXw&format=png',
            }}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </View>
      <View
        //   khung mờ
        style={{
          position: 'absolute',
          top: 380,
          left: 0,
          right: 0,
          flex: 1,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 20,
          paddingTop: 20,
          height: '70%', // 20% của chiều cao của hình ảnh
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Màu đen với độ mờ 40%
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{color: 'red', fontWeight: 'bold', fontSize: 18}}>
              đ <Text style={{fontSize: 23}}>{gia}</Text>
            </Text>
            <Text style={{fontSize: 18, color: 'white'}}>{name}</Text>
          </View>
          <TouchableOpacity style={{}}>
            <Image
              source={icon.comment}
              style={{height: 30, width: 30, justifyContent: 'center'}}
            />
            <Text style={{fontSize: 13, color: 'white'}}>Liên hệ</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 11,
          }}>
          <Image
            source={icon.star}
            style={{height: 15, width: 15, marginRight: 5}}
          />
          <Text style={{color: 'white', fontWeight: 'bold'}}>{sao}/5</Text>
        </View>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Mô tả: </Text>
        <Text style={{fontSize: 14}}>{mota}</Text>
      </View>
      <View style={{height: 70}}></View>
    </View>
  );
};

export default Itemlove;

const styles = StyleSheet.create({});
