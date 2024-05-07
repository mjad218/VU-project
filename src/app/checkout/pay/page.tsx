import { CartView } from "@/components/cart/CartView";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Pay } from "@/components/pay";
import React from "react";

const PayPage = () => {
  return (
    <div>
      <Header />
      <CartView>
        <Pay />
      </CartView>
      <Footer />
    </div>
  );
};

export default PayPage;
