import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrums from "../Components/BreadCrums/BreadCrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import "./Css/ProductPage.css";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
const ProductPage = () => {
  const { all_product } = useContext(ShopContext);
  const { productID } = useParams();
  const product = all_product.find((e) => e.id === Number(productID));
  // console.log(all_product);
  return (
    <div className="productpage flex flex-col ml-8 p-4">
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <RelatedProducts />
    </div>
  );
};

export default ProductPage;
