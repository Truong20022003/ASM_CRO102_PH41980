import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';

const List_food_ngang = props => {
  let {name, url} = props.foodsale;

  return (
    <View
      style={{
        // borderBottomWidth: 1,
        // borderTopWidth: 1,
        borderColor: 'gray',
        // backgroundColor: 'yellow',
        height: 120,
      }}>
      <View
        style={{
          height: 130,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          // backgroundColor: 'pink',
        }}>
        <Image
          style={{
            height: 80,
            width: 80,
            borderRadius: 50,
            marginBottom: 7,
          }}
          source={{
            uri: url,
          }}></Image>
        <View
          style={{
            marginHorizontal: 10, // Đã thay đổi từ marginRight thành marginLeft
            alignItems: 'center', // Cập nhật dòng này để căn giữa theo chiều dọc
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default List_food_ngang;
