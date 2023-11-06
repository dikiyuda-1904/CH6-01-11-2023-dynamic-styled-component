import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

function Button(props) {
  const { type, items, updateItemQty } = useContext(CartContext);

  return (
    <button className={`button-${type}-${props.id ? "id" : ""}`}>
      {props.children}
    </button>
  );
}

export default Button;
