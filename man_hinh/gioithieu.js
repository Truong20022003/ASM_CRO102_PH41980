import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageBackground} from 'react-native-web';
import {imgbackgr} from '../file_anh';
import Top_profile from './profile/top_profile';

const GioiThieu = () => {
  return (
    <View>
      <Top_profile />
      <ScrollView>
        <Image
          source={{
            uri: 'https://deo.shopeemobile.com/shopee/shopee-careers-live-vn/assets/img/about_banner.e9cf3a60.jpg',
          }}
          style={{height: 200, width: '100%', marginBottom: 10}}
        />
        <View style={st.item}>
          <Text style={st.text1}>Mục tiêu của chúng tôi</Text>
          <Text style={st.text2}>
            Chúng tôi tin tưởng vào sức mạnh khai triển của công nghệ và mong
            muốn góp phần làm cho thế giới trở nên tốt đẹp hơn bằng việc kết nối
            cộng đồng người mua và người bán thông qua việc cung cấp một nền
            tảng thương mại điện tử.
          </Text>
        </View>
        <View style={st.item}>
          <Text style={st.text1}>Định vị của chúng tôi</Text>
          <Text style={st.text2}>
            Đối với người dùng trên toàn khu vực, Shopee mang đến trải nghiệm
            mua sắm trực tuyến tích hợp với vô số sản phẩm đa dạng chủng loại,
            cộng đồng người dùng năng động và chuỗi dịch vụ liền mạch.
          </Text>
        </View>
        <View style={st.item}>
          <Text style={st.text1}>Đặc điểm về con người của chúng tôi</Text>
          <Text style={st.text2}>
            Để định nghĩa chúng tôi là ai - thông qua lời nói hay cách ứng xử
            trong nhiều trường hợp khác nhau - thì thực chất, chúng tôi Gần gũi,
            Vui vẻ và Đồng lòng. Đây là những đặc tính chính và nổi bật trong
            từng bước đường phát triển của Shopee.
          </Text>
          <ScrollView horizontal>
            <View style={{alignItems: 'center', width: 380, marginEnd: 10}}>
              <Image
                source={imgbackgr.a1}
                style={{height: 200, width: '100%', marginVertical: 10}}
              />
              <Text style={st.text1}>Vui Vẻ</Text>
              <Text style={st.text2}>
                Chúng tôi dễ gần, đáng yêu và tràn đầy năng lượng, luôn mang đến
                niềm vui cho những người xung quanh.
              </Text>
            </View>
            <View style={{alignItems: 'center', width: 380, marginEnd: 10}}>
              <Image
                source={imgbackgr.a2}
                style={{height: 200, width: '100%', marginVertical: 10}}
              />
              <Text style={st.text1}>Đồng Lòng</Text>
              <Text style={st.text2}>
                Chúng tôi thích tận hưởng thời gian bên nhau giống như tận hưởng
                việc mua sắm trực tuyến với người thân và bạn bè - làm những
                việc yêu thích cùng nhau như một đại gia đình lớn.
              </Text>
            </View>
            <View style={{alignItems: 'center', width: 380, marginEnd: 10}}>
              <Image
                source={imgbackgr.a3}
                style={{height: 200, width: '100%', marginVertical: 10}}
              />
              <Text style={st.text1}>Gần Gũi</Text>
              <Text style={st.text2}>
                Chúng tôi có niềm tin vào tính gần gũi mà thanh liêm, nền tảng
                vững chắc cho một cuộc sống trung thực, bình dân và thành thật
                với bản thân.
              </Text>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            padding: 10,
            borderTopWidth: 0.5,
            borderColor: 'gray',
            backgroundColor: '#fff',
          }}>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: "center",
              // alignItems: "center",
              padding: 5,
            }}>
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=50&id=YyHWR7RLwxso&format=png',
              }}
              style={{
                marginBottom: 20,
                height: 50,
                width: 50,
                tintColor: 'red',
              }}
            />
            <Text
              style={{fontSize: 30, color: 'red', fontWeight: '400', top: 10}}>
              Shopee
            </Text>
          </View>
          <Text style={st.h2}>Theo dõi chúng tôi</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingEnd: 100,
            }}>
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=48&id=xuvGCOXi8Wyg&format=png',
              }}
              style={{height: 50, width: 50}}
            />
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=48&id=63306&format=png',
              }}
              style={{height: 50, width: 50}}
            />
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=48&id=19318&format=png',
              }}
              style={{height: 50, width: 50}}
            />
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=48&id=118497&format=png',
              }}
              style={{height: 50, width: 50}}
            />
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=48&id=32323&format=png',
              }}
              style={{height: 50, width: 50}}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flex: 1}}>
              <Text style={st.h2}>SHOPEE CAREERS</Text>
              <Text style={st.h1}>Trang chủ</Text>
              <Text style={st.h1}>Về</Text>
              <Text style={st.h1}>Tại sao bạn chọn Shopee</Text>
              <Text style={st.h1}>Sự kiện</Text>
              <Text style={st.h1}>Việc làm</Text>
              <Text style={st.h1}>Sinh viên</Text>
              <Text style={st.h1}>Công nghệ</Text>
            </View>
            <View
              style={{
                flex: 1,
                paddingStart: 40,
              }}>
              <Text style={st.h2}>SHOPEE CAREERS</Text>
              <Text style={st.h1}>Trang chủ</Text>
              <Text style={st.h1}>Về</Text>
              <Text style={st.h1}>Tại sao bạn chọn Shopee</Text>
            </View>
          </View>
          <Text style={st.cuoi}>
            Copyright © 2024 Shopee. Trademarks belong to their respective
            owners. All rights reserved.Điều khoản sử dụng Chính sách bảo mật
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default GioiThieu;

const st = StyleSheet.create({
  cuoi: {
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    color: 'rgba(32,35,37,.6);',
  },
  h1: {
    marginBottom: 10,
    color: '#202325',
    fontSize: 13,
    marginStart: 5,
    textTransform: 'uppercase',
  },
  h2: {
    marginTop: 10,
    marginBottom: 20,
    color: '#797b7c',
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
    marginStart: 5,
    textTransform: 'uppercase',
  },
  text1: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 8,
  },
  text2: {color: '#797b7c', fontSize: 16, lineHeight: 28},
  item: {
    marginBottom: 24,
    textAlign: 'left',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
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
