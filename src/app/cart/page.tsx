import { CartView } from "@/components/cart/CartView";
import { TotalPrice } from "@/components/cart/totat-price";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const ShoppingCart = () => {
  return (
    <div>
      <Header />
      <CartView>
        <TotalPrice />
      </CartView>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
