import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Top_home from '../../navigation/top_home';
import Itemlove from './itemlove';
import {useCart} from '../../context/myCart';

const Love = ({navigation}) => {
  const {addlove, setaddlove, getlove} = useCart();
  const check_ds = addlove.length === 0;
  return (
    <View style={{flex: 1}}>
      <Top_home navigation={navigation} />
      {check_ds ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            Không có sản phẩm yêu thích
          </Text>
        </View>
      ) : (
        <FlatList
          data={addlove}
          renderItem={({item}) => {
            return <Itemlove data={item} />;
          }}
          // keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default Love;

const styles = StyleSheet.create({});
