import AsyncStorage from "@react-native-async-storage/async-storage";

const CART_KEY = "cart";

// lấy giỏ hàng
export const getCart = async () => {
  const data = await AsyncStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

// lưu giỏ hàng
export const saveCart = async (cart) => {
  await AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// thêm sản phẩm
export const addToCart = async (product) => {
  let cart = await getCart();

  const index = cart.findIndex(item => item.id === product.id);

  if (index !== -1) {
    // 🔥 cộng đúng số lượng người dùng chọn
    cart[index].quantity += product.quantity || 1;
  } else {
    cart.push({
      ...product,
      quantity: product.quantity || 1,
    });
  }

  await saveCart(cart);
};

// tăng số lượng
export const increaseQty = async (id) => {
  let cart = await getCart();

  cart = cart.map(item =>
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );

  await saveCart(cart);
};

// giảm số lượng
export const decreaseQty = async (id) => {
  let cart = await getCart();

  cart = cart.map(item =>
    item.id === id && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );

  await saveCart(cart);
};

// xoá item
export const removeItem = async (id) => {
  let cart = await getCart();

  cart = cart.filter(item => item.id !== id);

  await saveCart(cart);
};