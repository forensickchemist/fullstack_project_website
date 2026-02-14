import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api/base";

const Product_Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qty, setQty] = useState(1);

  const increment = () => {
    if (product) setQty((q) => Math.min(product.countInStock, q + 1));
  };
  const decrement = () => setQty((q) => Math.max(1, q - 1));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${BASE_URL}/products/${id}`);
        setProduct(res.data);
        setQty(Math.max(1, Math.min(res.data.countInStock || 1, 1)));
      } catch (err) {
        setError("Failed to load product.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : product ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Product image */}
          <div className="bg-white rounded shadow p-4 flex items-center justify-center">
            <img
              src={`${BASE_URL}${product.image}`}
              alt={product.product_name}
              className="w-full h-auto max-h-96 object-contain rounded"
            />
          </div>

          {/* Right: Details */}
          <div>
            <h1 className="text-3xl font-semibold mb-2">
              {product.product_name}
            </h1>
            <p className="text-2xl text-gray-900 font-bold mb-2">
              ₱{Number(product.product_price).toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Available Stocks:{" "}
              <span className="font-medium">{product.countInStock}</span>
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="flex items-center border rounded overflow-hidden">
                <button
                  onClick={decrement}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <input
                  type="text"
                  value={qty}
                  readOnly
                  className="w-14 text-center px-2 py-2 outline-none"
                  aria-label="Quantity"
                />
                <button
                  onClick={increment}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                onClick={() =>
                  console.log(`Add ${qty} of ${product.id} to cart`)
                }
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
              >
                Add to cart
              </button>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Product not found.</p>
      )}
    </div>
  );
};

export default Product_Details;
