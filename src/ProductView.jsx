import React from 'react';

const product = {
  id: 1,
  title: "Stylish Urban Wear T-Shirt",
  price: 29.99,
  description: "A comfortable and stylish t-shirt made from high-quality cotton. Perfect for casual outings.",
  images: [
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", // Replace with your product images
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  ],
  sizes: ["S", "M", "L", "XL"],
  colors: ["#FF0000", "#00FF00", "#0000FF"], // Example colors
};

function ProductView() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Image Gallery */}
        <div className="md:w-1/2">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="flex space-x-2 mt-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-24 h-24 object-cover rounded-lg cursor-pointer border border-gray-300 hover:border-gray-500"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-xl font-semibold text-gray-700 mt-2">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Size Selection */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Sizes:</h2>
            <div className="flex space-x-2 mt-2">
              {product.sizes.map((size) => (
                <span key={size} className="border border-gray-300 rounded-full px-3 py-1 cursor-pointer hover:bg-gray-200">
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Colors:</h2>
            <div className="flex space-x-2 mt-2">
              {product.colors.map((color, index) => (
                <span key={index} className="w-8 h-8 rounded-full" style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
