import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveLogin = async (data) => {
  await AsyncStorage.setItem('token', data.token);
  await AsyncStorage.setItem('user', JSON.stringify(data.user));
};

export const getToken = async () => {
  return await AsyncStorage.getItem('token');
};

export const logout = async () => {
  await AsyncStorage.clear();
};