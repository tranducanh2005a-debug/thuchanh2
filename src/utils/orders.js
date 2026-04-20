import AsyncStorage from "@react-native-async-storage/async-storage";

const ORDER_KEY = "orders";

// lấy danh sách đơn
export const getOrders = async () => {
  const data = await AsyncStorage.getItem(ORDER_KEY);
  return data ? JSON.parse(data) : [];
};

// lưu danh sách đơn
export const saveOrders = async (orders) => {
  await AsyncStorage.setItem(ORDER_KEY, JSON.stringify(orders));
};

// tạo đơn hàng mới
export const createOrder = async (cartItems, total) => {
  const orders = await getOrders();

  const newOrder = {
    id: Date.now().toString(),
    items: cartItems,
    total: total,
    time: new Date().toLocaleString(),
  };

  orders.unshift(newOrder);

  await saveOrders(orders);
};