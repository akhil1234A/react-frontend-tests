import React, { useState } from 'react';


function ProductView() {

  const product = {
    id: 1,
    title: "Stylish Urban Wear T-Shirt",
    price: 29.99,
    description: "A comfortable and stylish t-shirt made from high-quality cotton. Perfect for casual outings.",
    images: {
      red: [
        "https://via.placeholder.com/500x300/FF0000/FFFFFF?text=Red+Image+1",
        "https://via.placeholder.com/500x300/FF0000/FFFFFF?text=Red+Image+2",
        "https://via.placeholder.com/500x300/FF0000/FFFFFF?text=Red+Image+3",
      ],
      green: [
        "https://via.placeholder.com/500x300/00FF00/FFFFFF?text=Green+Image+1",
        "https://via.placeholder.com/500x300/00FF00/FFFFFF?text=Green+Image+2",
        "https://via.placeholder.com/500x300/00FF00/FFFFFF?text=Green+Image+3",
      ],
      blue: [
        "https://via.placeholder.com/500x300/0000FF/FFFFFF?text=Blue+Image+1",
        "https://via.placeholder.com/500x300/0000FF/FFFFFF?text=Blue+Image+2",
        "https://via.placeholder.com/500x300/0000FF/FFFFFF?text=Blue+Image+3",
      ],
    },
    sizes: {
      red: ["S", "M", "L", "XL"],
      green: ["M", "L"],
      blue: ["L"],
    },
    colors: [
      { name: 'Red', code: '#FF0000' },
      { name: 'Green', code: '#00FF00' },
      { name: 'Blue', code: '#0000FF' },
    ],
  };
  

  const [selectedColor, setSelectedColor] = useState('red'); // Default color
  const [displayedImages, setDisplayedImages] = useState(product.images[selectedColor]); // Set initial images
  const [selectedSize, setSelectedSize] = useState(product.sizes[selectedColor][0]); // Default size based on the initial color

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setDisplayedImages(product.images[color]);
    // Reset size to the first available size for the new color
    setSelectedSize(product.sizes[color][0]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Image Gallery */}
        <div className="md:w-1/2">
          <img
            src={displayedImages[0]} // Display the first image of the currently selected color
            alt={product.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="flex space-x-2 mt-4">
            {displayedImages.map((image, index) => (
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
              {product.sizes[selectedColor].map((size) => (
                <span
                  key={size}
                  className={`border border-gray-300 rounded-full px-3 py-1 cursor-pointer hover:bg-gray-200 ${selectedSize === size ? 'bg-gray-200' : ''}`}
                  onClick={() => setSelectedSize(size)} // Handle size selection
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Colors:</h2>
            <div className="flex space-x-2 mt-2">
              {product.colors.map((color) => (
                <span
                  key={color.code}
                  className="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                  style={{ backgroundColor: color.code }}
                  onClick={() => handleColorChange(color.name.toLowerCase())} // Handle color change
                />
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
