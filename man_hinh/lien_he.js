import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavigationTop from '../navigation/navigationTop';
import Top_profile from './profile/top_profile';
import {icon, imgbackgr} from '../file_anh';

const Lien_he = () => {
  return (
    <View style={{flex: 1}}>
      <Top_profile />
      <View
        style={{
          paddingHorizontal: 20,
          justifyContent: 'space-evenly',
        }}>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Trụ sở chính</Text>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20}}> Số điện thoại:</Text>
            <Text style={{fontSize: 20}}> 0962696</Text>
          </View>
          <Text style={{fontSize: 20}}> Địa chỉ</Text>
          <Text style={{fontSize: 15}}>
            Khách hàng liên hệ với chúng tôi Hãy liên hệ với để chúng tôi có thể
            tư vấn trực tiếp cho bạn về sản phẩm và dịch vụ bạn quan tâm. Chúng
            tôi luôn sẵn lòng lắng nghe và hỗ trợ bạn!
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text>
            Chúng tôi liên hệ với khách hàng Khi liên hệ với bạn để cung cấp
            thông tin, hướng dẫn đăng ký dịch vụ, chăm sóc và khảo sát ý kiến:
            Điện thoại bạn sẽ hiển thị BIDV hoặc các số điện thoại
          </Text>
        </View>
        <Image source={icon.map} style={{height: 200, width: '100%'}} />
      </View>
    </View>
  );
};

export default Lien_he;

const styles = StyleSheet.create({});
