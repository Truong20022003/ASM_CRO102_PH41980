import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Mon_an from './list_mon_an.js/mon_an';
// import Button_menu from '../../../navigation/button_menu';

import List_food_ngang from '././list_mon_an.js/list_food_ngang';
import {icon} from '../../file_anh';
import {useNavigation} from '@react-navigation/native';
import Top_home from '../../navigation/top_home';

const Home = props => {
  const navigation = useNavigation();
  ////arr1
  const [foods, setfoods] = useState([
    {
      id: '14',
      name: 'Bánh mỳ Hòa Mã',
      url: 'https://focusasiatravel.vn/wp-content/uploads/2019/12/banh-cuon-ba-hanh-mon-an-ngon-ha-noi-3.jpg',
      status: 'Đã ra mắt',
      gia: 60000,
      diachi: 'Hà nội',
      daban: 100,
      sao: 4.8,
      website: 'https://www.facebook.com/',
      mota: 'Bánh mì chảo Hòa Mã là một món ăn đặc trưng của Sài Gòn, có lịch sử hơn 60 năm. Món ăn này gồm một chiếc bánh mì giòn tan, bơ béo, được ăn kèm với một chảo nóng hổi chứa nhiều nguyên liệu như trứng, lạp xưởng, chả, jambon, thịt ba rọi... Tất cả đều được chiên chín vàng, thơm lừng. Món ăn còn có thêm pate, dưa leo, cà chua, rau sống để tăng thêm độ tươi ngon và giảm ngấy. Bánh mì chảo Hòa Mã có vị béo ngậy, đậm đà, hòa quyện giữa các nguyên liệu. Món ăn phù hợp cho bữa sáng hoặc bữa trưa, giúp bạn no lâu và đủ năng lượng',
    },
    {
      id: '15',
      name: 'Đồ nướng BBQ',
      url: 'https://travelgear.vn/blog/wp-content/uploads/2019/11/quan-nuong-bo-cuoi-262136.jpg',
      status: 'sắp ra mắt',
      gia: 50000,
      diachi: 'Đà nẵng',
      daban: 280,
      sao: 4.9,
      website: 'https://www.facebook.com/',
      mota: 'Đồ nướng BBQ là một món ăn được nhiều người yêu thích với hương vị thơm ngon, chế biến hiện đại. Món ăn này gồm các loại thịt, hải sản, rau củ... được ướp với các loại gia vị và sốt khác nhau, rồi được nướng trên bếp than hoặc bếp điện. Đồ nướng BBQ có nhiều phong cách khác nhau, như Hàn Quốc, Nhật Bản, Việt Nam... Tùy vào sở thích và khẩu vị của bạn, bạn có thể lựa chọn các loại đồ nướng BBQ phù hợp với mình. Đồ nướng BBQ có vị béo ngậy, đậm đà, hòa quyện giữa các nguyên liệu. Món ăn phù hợp cho những bữa tiệc, những dịp gặp gỡ bạn bè, gia đình. Đồ nướng BBQ cũng có nhiều lợi ích cho sức khỏe, như cung cấp protein, chất béo, vitamin, khoáng chất..',
    },
    {
      id: '16',
      name: ' Bò né dung',
      url: 'https://foodi.com.vn/wp-content/uploads/2019/05/quan-an-dem-Sai-Gon-18.jpg',
      status: 'Đã ra mắt',
      gia: 30000,
      diachi: 'Đà nẵng',
      daban: 222,
      sao: 4.9,
      website: 'https://www.facebook.com/',
      mota: 'Món bò né của quán được làm từ thịt bò tươi ngon, được ướp với các loại gia vị và sốt đặc biệt, rồi được nướng trên chảo gang nóng hổi. Món ăn có vị béo ngậy, thơm lừng, hòa quyện giữa các nguyên liệu. Món ăn được ăn kèm với bánh mì giòn tan, rau sống, dưa chuột và một bát nước lèo đậm đà. Bò né Dung là một quán ăn đáng thử nếu bạn muốn thưởng thức một món ăn bổ dưỡng, ngon miệng và đậm chất Đà Nẵng.',
    },
    {
      id: '17',
      name: 'Hàu chiên trứng',
      url: 'https://foodi.com.vn/wp-content/uploads/2019/05/quan-an-dem-Sai-Gon-15.jpg',
      status: 'Đã ra mắt',
      gia: 20000,
      diachi: 'Hà nội',
      daban: 290,
      sao: 4.7,
      website: 'https://www.facebook.com/',
      mota: 'Hàu chiên trứng là một món ăn đơn giản nhưng hấp dẫn, được nhiều người ưa thích. Món ăn này gồm các con hàu sữa được ướp với gia vị, rồi được chiên giòn với trứng và hành lá. Hàu chiên trứng có vị béo béo, ngọt ngọt, thơm mùi hành lá, ăn kèm với đủ đủ bào sợi và rau sống. Món ăn còn có thêm nước lèo đậm đà, giúp tăng thêm hương vị và giảm ngấy. Hàu chiên trứng là một món ăn bổ dưỡng, cung cấp nhiều protein, canxi, sắt, kẽm... cho cơ thể.',
    },
    {
      id: '18',
      name: 'Cơm tấm bà Mười',
      url: 'https://foodi.com.vn/wp-content/uploads/2019/05/quan-an-dem-Sai-Gon-10-e1558140735644.jpg',
      status: 'sắp ra mắt',
      gia: 2121333,
      diachi: 'Hồ Chí Minh',
      daban: 666,
      sao: 4.8,
      website: 'https://www.facebook.com/',
      mota: 'Cơm tấm là một món ăn truyền thống của người miền Nam, được làm từ gạo tấm, là những hạt gạo bị vỡ trong quá trình xay xát. Cơm tấm có vị ngọt thanh, dẻo mềm, ăn kèm với sườn, bì chả, trứng ốp la, đồ chua, cà chua, mỡ hành... Cơm tấm còn có thêm nước lèo đậm đà, giúp tăng thêm hương vị và giảm ngấy. Cơm tấm là một món ăn bổ dưỡng, cung cấp nhiều tinh bột, protein, chất béo, vitamin, khoáng chất... cho cơ thể.',
    },
    {
      id: '19',
      name: 'Hủ tiếu xào Tâm Ký',
      url: 'https://foodi.com.vn/wp-content/uploads/2019/05/quan-an-dem-Sai-Gon-9.jpg',
      status: 'Đã ra mắt',
      gia: 21210000,
      diachi: 'Hồ chí Minh',
      daban: 305,
      sao: 4.7,
      website: 'https://www.facebook.com/',
      mota: 'Hủ tiếu xào Tâm Ký là một món ăn ngon, nổi tiếng ở Sài Gòn. Món ăn này gồm hủ tiếu được xào với thịt heo, tôm, trứng, rau cải, hành lá và các loại gia vị. Hủ tiếu xào có vị ngọt thanh, béo ngậy, thơm mùi hành lá, ăn kèm với đồ chua, cà chua, rau sống. Món ăn còn có thêm nước lèo đậm đà, giúp tăng thêm hương vị và giảm ngấy. Hủ tiếu xào Tâm Ký là một món ăn bổ dưỡng, cung cấp nhiều tinh bột, protein, chất béo, vitamin, khoáng chất...',
    },
    {
      id: '20',
      name: 'Cháo trắng Hàng Xanh',
      url: 'https://foodi.com.vn/wp-content/uploads/2019/05/quan-an-dem-Sai-Gon-8-e1558140663768.jpg',
      status: 'sắp ra mắt',
      gia: 2121232,
      diachi: 'Lào Cai',
      daban: 305,
      sao: 4.7,
      website: 'https://www.facebook.com/',
      mota: 'Món cháo trắng Hàng Xanh là một món ăn đơn giản nhưng đậm đà hương vị. Cháo được nấu từ gạo tẻ, nước dùng xương heo, lá dứa và gia vị. Cháo có vị ngọt thanh, thơm mùi lá dứa, đặc biệt là khi ăn kèm với món dưa món chua cay. Cháo trắng Hàng Xanh còn có nhiều món ăn kèm để bạn lựa chọn, như lòng, gan, thịt, trứng, cá, tôm... Mỗi món đều được chế biến kỹ lưỡng, giữ được độ tươi ngon và hợp với khẩu vị của người Việt. Quán ăn có không gian rộng rãi, sạch sẽ, phục vụ nhanh nhẹn và thân thiện. Giá cả cũng rất bình dân, chỉ từ 8.000 đồng đến 15.000 đồng một tô cháo và từ 10.000 đồng đến 15.000 đồng một món ăn kèm. Cháo trắng Hàng Xanh là một địa chỉ ăn uống đáng thử nếu bạn muốn thưởng thức một món ăn truyền thống, bổ dưỡng và ngon miệng.',
    },
    {
      id: '21',
      name: 'Xôi gà',
      url: 'https://foodi.com.vn/wp-content/uploads/2019/05/quan-an-dem-Sai-Gon-7-e1558140522263.jpg',
      status: 'Đã ra mắt',
      gia: 212132323243,
      diachi: 'Lào Cai',
      daban: 446,
      sao: 4.9,
      website: 'https://www.facebook.com/',
      mota: 'Xôi gà là một món ăn truyền thống của người Việt Nam, được làm từ gạo nếp, thịt gà và các loại gia vị. Xôi gà có vị ngọt thanh của gạo, béo ngậy của thịt gà, thơm mùi của hành, gừng, nước mắm... Xôi gà được ăn kèm với đồ chua, rau sống, nước lèo đậm đà. Xôi gà là một món ăn bổ dưỡng, cung cấp nhiều tinh bột, protein, chất béo, vitamin, khoáng chất... ',
    },
    {
      id: '22',
      name: ' Cơm tấm ',
      url: 'https://foodi.com.vn/wp-content/uploads/2019/05/quan-an-dem-Sai-Gon-4-e1558140408737.jpg',
      status: 'Còn hàng',
      gia: 212123232,
      diachi: 'Hồ Chí Minh',
      daban: 223,
      sao: 4.7,
      website: 'https://www.facebook.com/',
      mota: 'Cơm tấm là một món ăn truyền thống của người miền Nam, được làm từ gạo tấm, là những hạt gạo bị vỡ trong quá trình xay xát. Cơm tấm có vị ngọt thanh, dẻo mềm, ăn kèm với sườn, bì chả, trứng ốp la, đồ chua, cà chua, mỡ hành... Cơm tấm còn có thêm nước lèo đậm đà, giúp tăng thêm hương vị và giảm ngấy. Cơm tấm là một món ăn bổ dưỡng, cung cấp nhiều tinh bột, protein, chất béo, vitamin, khoáng chất... cho cơ thể.',
    },
  ]);
  ///arr2
  const [foodsale, setfoodsale] = useState([
    {
      name: 'Lẩu mắm',
      url: 'https://file.hstatic.net/1000054905/file/lau-mam-mien-tay_7f06645c5f8344bf939a734afba04482.jpg',
    },
    {
      name: 'Lẩu cá linh',
      url: 'https://file.hstatic.net/1000054905/file/lau-ca-linh-mien-tay_b4cbf04b537147a7aefc3c5ef6ccc3dd.jpg',
    },
    {
      name: 'Bún mắm ',
      url: 'https://file.hstatic.net/1000054905/file/bun-mam-mien-tay_6c2e7786dc374bfea7da2eb05b8404b8.jpg',
    },
    {
      name: 'Bún cá',
      url: 'https://file.hstatic.net/1000054905/file/bun-ca-mien-tay_3c88d795bd2c4e6da8e600e22540bfea.jpg',
    },
    {
      name: 'Gà hấp rượu',
      url: 'https://file.hstatic.net/1000054905/file/ga-hap-mien-tay_1e1db4c3821347a499c2fd50a6ad7fe9.jpg',
    },
    {
      name: 'Cháo cá',
      url: 'https://file.hstatic.net/1000054905/file/long-an-chao-ca-loc_2e6f80a42f10428db7f5ba96cf20c1b3.jpg',
    },
    {
      name: 'Bò tùng xẻo',
      url: 'https://file.hstatic.net/1000054905/file/bo-tung-xeo-mien-tay_763214a5a4f84d9a81933540b5c62bc3.jpg',
    },
    {
      name: 'Đuông dừa',
      url: 'https://file.hstatic.net/1000054905/file/du-lich-mien-tay__22__35f70d76e6fa4a6884fe8eef4bd87405.jpg',
    },
    {
      name: 'Bánh xèo ',
      url: 'https://file.hstatic.net/1000054905/file/banh-xeo-ngon_178e5b652a034c7ca1aadefc36085170.jpg',
    },
    {
      name: 'Bún Thang',
      url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/bun-thang-mon-an-ngon-o-ha-noi.jpg',
    },
    {
      name: 'Bún Ốc',
      url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/bun-oc-mon-an-ngon-o-ha-noi.jpg',
    },
    {
      name: 'Cốm Làng Vòng',
      url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/com-lang-vong-mon-an-ngon-o-ha-noi.jpg',
    },
    {
      name: 'Bánh mỳ',
      url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/banh-mi-25-mon-an-ngon-o-ha-noi.jpg',
    },
    {
      name: 'Bánh tôm Hồ Tây',
      url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/banh-tom-ho-tay-mon-an-ngon-o-ha-noi.jpg',
    },
    {
      name: 'Cà phê Trứng',
      url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/ca-phe-trung-mon-an-ngon-o-ha-noi.jpg',
    },
    {
      name: 'Bánh Căn',
      url: 'https://datnenlagi.net/wp-content/uploads/2022/06/foody-upload-api-foody-mobile-banh-can-ngon-jpg-180309160642.jpg',
    },
    {
      name: 'Gỏi cá mai Lagi ',
      url: 'https://datnenlagi.net/wp-content/uploads/2022/06/img20210506155503-16203176274411053318312-min-scaled.jpg',
    },
    {
      name: 'Bún bò Huế',
      url: 'https://media.cooky.vn/recipe/g3/28487/s/recipe28487-prepare-step5-636577704586605195.jpg',
    },
    {
      name: 'Hủ tiếu',
      url: 'https://media.cooky.vn/recipe/g1/1552/s/recipe1552-cook-step8-636875649012584632.jpg',
    },
  ]);

  const [searchText, setsearchText] = useState('');
  const checksearch = () =>
    foods.filter(search =>
      search.name.toLowerCase().includes(searchText.toLowerCase()),
    );

  return (
    <View style={{flex: 1}}>
      <Top_home
      // onFocus={handleFocus}
      // // onBlur={handleBlur}
      // searchText={searchText}
      // setsearchText={setsearchText}
      />
      <FlatList
        style={{backgroundColor: 'white'}}
        ListHeaderComponent={
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <Text
              style={{
                color: 'black',
                fontSize: 30,
                fontWeight: 'bold',
                marginStart: 20,
                marginTop: 15,
              }}>
              Wellcome, My App
            </Text>
            <View
              style={{
                height: 50,
                backgroundColor: 'rgb(255, 179, 179)',
                marginHorizontal: 20,
                borderRadius: 50,
                marginTop: 10,
                alignItems: 'flex-end',
                flexDirection: 'row',
              }}>
              <TextInput
                placeholder="Tìm Kiếm"
                onChangeText={text => setsearchText(text)}
                style={{width: '90%', marginStart: 12}}
              />
              <Image
                source={icon.timkiem}
                style={{
                  width: 40,
                  height: 40,
                  position: 'absolute',
                  end: 3,
                }}
              />
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: 'rgb(255, 128, 128)',
                marginHorizontal: 40,
                bottom: 7,
              }}></View>
            <View style={{height: 120}}>
              <FlatList
                horizontal
                data={foodsale}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <List_food_ngang foodsale={item} />}
              />
            </View>
            {checksearch().length > 0 ? (
              <View>
                <FlatList
                  data={checksearch()}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => <Mon_an food={item} />}
                  keyExtractor={item => item.id.toString()}
                />
              </View>
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 20, color: 'black'}}>
                  Không tìm thấy kết quả
                </Text>
              </View>
            )}
          </View>
        }
      />

      {/* <View
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
        }}>
        {isMenuVisible == true && <Button_menu />}
      </View> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
