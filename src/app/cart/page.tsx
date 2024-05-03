import { CartView } from "@/components/cart/CartView";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const ShoppingCart = () => {
  return (
    <div>
      <Header />
      <CartView />
      <Footer />
    </div>
  );
};

export default ShoppingCart;
