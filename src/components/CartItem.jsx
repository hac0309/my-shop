import { useDispatch } from "react-redux";
import { decreaseCount, increaseCount, removeItemFromCart } from "../features/cart/cartSlice";

function CartItem(props) {
  const {cartItem : {title,id,count,price},index} = props

  const formatter = new Intl.NumberFormat('ko-KR');
  const dispatch = useDispatch();
  

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>
        <button onClick={() => dispatch(decreaseCount(id))}>-</button>
        {count}
        <button onClick={() =>dispatch(increaseCount(id))}>+</button>
      </td>
      <td>{formatter.format(price * count)}원</td>
      <td>
        <button onClick={() => dispatch(removeItemFromCart(id))}>X</button>
      </td>
    </tr>
  );
};

export default CartItem;