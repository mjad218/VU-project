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
    <div className="flex gap-6">
      <Image
        src={item.product.imagesUrls[0]}
        alt={item.product.name}
        width={150}
        height={150}
        className=" w-32 h-32 rounded-md block"
      />
      <div className="flex flex-col gap-3">
        <h2 className="font-title text-lg font-bold">{item.product.name}</h2>

        <h5>${(item.product.price * item.quantity).toFixed(2)}</h5>
        <div className="flex gap-2 items-center">
          <span className="text-sm">Quantity</span>
          <Button
            className="bg-[var(--rose)]"
            aria-label="decrease"
            onClick={() => {
              handleQuantityChange(item.quantity - 1);
            }}
          >
            <FaMinus />
          </Button>
          <h6>&nbsp;{item.quantity}&nbsp;</h6>
          <Button
            className="bg-[var(--rose)]"
            aria-label="increase"
            onClick={() => {
              handleQuantityChange(item.quantity + 1);
            }}
          >
            <IoIosAdd />
          </Button>
        </div>
      </div>
      <Button aria-label="remove" onClick={handleRemoveClick}>
        <RiDeleteBin6Line className="w-5 h-auto text-red-600" />
      </Button>
    </div>
  );
};
