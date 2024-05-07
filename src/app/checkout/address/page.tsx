import { AddressForm } from "@/components/address-form";
import { CartView } from "@/components/cart/CartView";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import React from "react";

const AddressPage = () => {
  return (
    <div>
      <Header />

      <CartView>
        <AddressForm />
      </CartView>
      <Footer />
    </div>
  );
};

export default AddressPage;
