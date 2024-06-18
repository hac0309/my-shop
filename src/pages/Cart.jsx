import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCartList } from "../features/cart/cartSlice";
import CartItem from "../components/CartItem";

function Cart() {
  const cartList = useSelector(selectCartList);
  // console.log(cartList);
  const formatter = new Intl.NumberFormat('ko-KR');
  return (
    <>
      {/* 표 레이아웃 만들기 */}
      <Table hover>
      <thead>
        <tr>
          <th>No</th>
          <th>상품명</th>
          <th>수량</th>
          <th>가격</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
      {cartList.map((cartItem,index) => <CartItem cartItem={cartItem} key={cartItem.id} index={index}/>)}

      {/* 합계 구하기 */}
      <tr>
        <th>합계</th>
        <td></td>
        <td></td>
        <th>
          {formatter.format(cartList.reduce((prev , cartItem) => {
            console.log(prev); // 주의: 초기값이 없으면 배열 인덱스 0이 초기값으로 사용됨
            return prev + (cartItem.price * cartItem.count);
          }, 0))}원
        </th>
        <td></td>
      </tr>
      </tbody>
    </Table>
    </>
  );
};

export default Cart;