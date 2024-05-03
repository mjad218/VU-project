import { CartItem } from "@/types/product";
import Image from "next/image";
import { useCart } from "./context";
import { Button } from "../button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";

interface Props {
  item: CartItem;
}

export const CartItemView = ({ item }: Props) => {
  const { removeFromCart, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (qty: number) => {
    const quantity = Number(qty);
    if (quantity >= 1) {
      updateCartItemQuantity(item.product.id, quantity);
    }
  };

  const handleRemoveClick = () => {
    removeFromCart(item.product.id);
  };

  return (
    <div>
      {/* Product Image and Title */}
      <div>
        <Image
          src={item.product.imagesUrls[0]}
          alt={item.product.name}
          width={150}
          height={150}
        />
        <h2>{item.product.name}</h2>
      </div>
      <div>
        <div>
          <h5>${(item.product.price * item.quantity).toFixed(2)}</h5>
          <div>
            {/* Icreasing/Deacreasing Product Quantity Button  */}
            <div>
              <Button
                aria-label="decrease"
                onClick={() => {
                  handleQuantityChange(item.quantity - 1);
                }}
              >
                <FaMinus />
              </Button>
              <h6>&nbsp;{item.quantity}&nbsp;</h6>
              <Button
                aria-label="increase"
                onClick={() => {
                  handleQuantityChange(item.quantity + 1);
                }}
              >
                <IoIosAdd />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Removing Product From Cart */}
      <div>
        <Button aria-label="remove" onClick={handleRemoveClick}>
          <RiDeleteBin6Line />
        </Button>
      </div>
    </div>
  );
};
