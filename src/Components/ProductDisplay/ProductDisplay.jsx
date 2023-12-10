import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addtocart } = useContext(ShopContext);
  return (
    <div className="productdisplay flex justify-between gap-3">
      <div className="productdisplay-left flex gap-3">
        <div className="productdisplay-img-list flex flex-col gap-4">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-main-img flex justify-start">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1 className="text-3xl font-semibold py-3">{product.name}</h1>
        <div className="productdisplay_stars flex gap-1">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(123)</p>
        </div>
        <div className="productdisplay-rights-prices p-4 flex items-center gap-2">
          <div className="productdisplay-right-price-new text-xl font-semibold">
            ₹{product.new_price}
          </div>
          <div className="productdisplay-right-price-old line-through text-sm">
            ₹{product.old_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Contemporary, off-beat and stylish brand Hammersmith has made fashion
          available to everyone without burning a hole in the pocket. With their
          range of casual and formal menswear, there is plethora of options to
          choose from for a man-on-the-go.
        </div>
        <div className="productdisplay-right-size p-2">
          <h1 className="font-semibold">Select Size :</h1>
          <div className="productdisplay-right-sizes text-sm flex gap-2">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          className="bg-orange-600 text-white px-5 rounded-xl text-xl font-semibold py-2 mt-3"
          onClick={() => {
            addtocart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category flex gap-2 mt-3">
          <span className="font-semibold">Category:</span>
          {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
