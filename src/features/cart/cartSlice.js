// 장바구니 정보를 담을 slice 만들기

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [
    {
      id: '1',
      title: 'Arcsaber 11 Pro',
      price: 299000,
      count: 2
    },
    {
      id: '3',
      title: 'Aerus Z',
      price: 199000,
      count: 1
    },
  ]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 수량을 변경하는 리듀서 만들기
    // Quiz: 전달받은 상품의 id값으로 cartList에서 해당 상품을 찾아 수량을 1씩 증가/감소
    increaseCount: (state, action) => {
      const item = state.cartList.find(cart => cart.id === action.payload);
      item.count += 1;
    },
    decreaseCount: (state, { payload: productId } ) => {
      const item = state.cartList.find(cart => cart.id === productId);
      item.count -= 1;
    },
    // 상품 객체로 넘겨주면 cartList에 아이템을 추가하는 리듀서 만들기
    // 이미 들어있는 상품이면 수량만 증가
    // 장바구니에 없는 상품이면 새롭게 추가
    addItemToCart: (state, { payload: product }) => {

      // console.log(product);
    //   const item =  state.cartList.find((cart) => {
    //     console.log(product);
    //     return cart.id === product.id;
    //   })
    //   if (!item) {
    //     state.cartList.push({
    //       id: product.id,
    //       title: product.title,
    //       price: product.price,
    //       count: 1,
    //     })
    //   } else {
    //     item.count ++;
    //   }
    //   console.log(product);
    //   item.count ++;
    // }
    // ----------------------------------------------------> 넘길때.. 객체형태로..넘기면..됨..흑흑 바보최현아...
      const item =  state.cartList.find(cart => cart.id === product.id);
      if (!item) {
        state.cartList.push(product)
      } else {
        item.count += product.count;
      }
    },
    // Quiz: 장바구니에서 삭제하는 리듀서 만들기
    removeItemFromCart: (state, { payload: id}) => {
      // 방법1
      // const targetIndex = state.cartList.findIndex(cartItem => cartItem.id === id);
      // state.cartList.splice(targetIndex, 1);

      // 밥법2: filter() 사용 시
      state.cartList = state.cartList.filter((cart) => {
        return cart.id !== id;
      });
    }
  }
});

export const { increaseCount, decreaseCount, addItemToCart, removeItemFromCart}  = cartSlice.actions;

export const selectCartList = state => state.cart.cartList;

export default cartSlice.reducer;