const cartKey = "cart";
export const saveState = (cartItem) => {
  localStorage.setItem(cartKey, JSON.stringify(cartItem.cart));
};

export const loadState = () => {
  return JSON.parse(localStorage.getItem(cartKey));
};
