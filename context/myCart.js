import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import Reload from '../man_hinh/reload';

const AddTooCart = createContext('');
const MyCart = ({children}) => {
  const [addToCart, setaddToCart] = useState([]);
  const [addlove, setaddlove] = useState([]);
  const getlove = async () => {
    try {
      // await AsyncStorage.clear();
      const result = await AsyncStorage.getItem('notelove');
      if (result != null) {
        setaddlove(JSON.parse(result));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getCart = async () => {
    try {
      // await AsyncStorage.clear();
      const result = await AsyncStorage.getItem('notecart');
      if (result !== null) {
        setaddToCart(JSON.parse(result));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeFromCart = async itemId => {
    const updatedCart = addToCart.filter(item => item.id !== itemId);
    setaddToCart(updatedCart);
    try {
      await AsyncStorage.setItem('notecart', JSON.stringify(updatedCart));
    } catch (error) {
      console.log('Error removing item from cart:', error);
    }
  };
  const removeFromLove = async itemId => {
    const updatedLove = addlove.filter(item => item.id !== itemId);
    setaddlove(updatedLove);
    try {
      await AsyncStorage.setItem('notelove', JSON.stringify(updatedLove));
    } catch (error) {
      console.log('Error removing item from cart:', error);
    }
  };
  useEffect(() => {
    getCart();
    getlove();
  }, []);
  return (
    <AddTooCart.Provider
      value={{
        addToCart,
        setaddToCart,
        getCart,
        addlove,
        setaddlove,
        getlove,
        removeFromCart,
        removeFromLove,
      }}>
      {children}
    </AddTooCart.Provider>
  );
};
export const useCart = () => useContext(AddTooCart);
export default MyCart;
