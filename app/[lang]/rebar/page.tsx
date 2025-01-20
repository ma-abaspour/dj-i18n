
import React from 'react';

export default function RebarProductPage() {
  const product = {
    name: 'Rebar',
    description:
      'Our premium rebar offers unmatched strength and durability, making it ideal for construction projects of any scale. Designed to meet industry standards, this rebar ensures structural integrity and long-term performance.',
    images: [
      'https://picsum.photos/800/600?random=1', // Random placeholder image
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=4',
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-auto rounded-lg object-cover"
              />
            ))}
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
            <p className="text-gray-700 text-lg mb-6">{product.description}</p>
            <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
              Contact Us for More Details
            </button>
          </div>
        </div>

        {/* Additional Description */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">About Premium Rebar</h2>
          <p className="text-gray-700 text-lg mb-4">
            Premium rebar is designed to meet the needs of modern construction, ensuring safety, durability, and cost-effectiveness. It is crafted using advanced manufacturing techniques and subjected to rigorous quality checks to maintain its high standard.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Whether you are working on small-scale residential projects or large commercial developments, our premium rebar is versatile enough to adapt to any application. Its corrosion resistance and strength make it a reliable choice for both short-term and long-term use.
          </p>
          <p className="text-gray-700 text-lg">
            Choose premium rebar for your next project and experience the blend of quality and performance that sets us apart. Contact us today to learn more about how our products can support your construction needs.
          </p>
        </div>
      </div>
    </section>
  );
}
