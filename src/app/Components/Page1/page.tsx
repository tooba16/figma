'use client';
import Image from 'next/image';
import React from 'react';

export default function Homeee() {
  const products = [
    { id: 1, name: "Trenton modular sofa", price: "Rs. 25,000.00", image: "/images/sofa.png" },
    { id: 2, name: "Granite dining table with dining chair", price: "Rs. 25,000.00", image: "/images/dining.png" },
    { id: 3, name: "Outdoor bar table and stool", price: "Rs. 25,000.00", image: "/images/stool.png" },
    { id: 4, name: "Plain console with teak mirror", price: "Rs. 25,000.00", image: "/images/mirror.png" },
  ];

  return (
    <div className="h-screen bg-gradient-to-r from-yellow-300 to-yellow-500 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 ml-[37%]">
        <ul className="flex space-x-8 text-wrap">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Shop</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
        <div className="flex space-x-6 text-lg ml-[-12]">
          <Image src="/images/man.png" alt="User Profile" width={20} height={20} />
          <Image src="/images/search.png" alt="Search Icon" width={20} height={20} />
          <Image src="/images/heart.png" alt="Wishlist Icon" width={20} height={20} />
          <Image src="/images/shopping.png" alt="Cart Icon" width={20} height={20} />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-20 py-20">
        <div className="text-left space-y-[-9] -mt-20">
          <h1 className="text-6xl font-bold ml-14 -mt-9 ">Rocket Single Seater</h1>
          <a href="#" className="text-2xl text-center ml-14 mt-9 underline">Shop Now</a>
        </div>
        <div className='-mt-40'>
        <Image src="/images/seat.png" alt="Rocket Single Seater" width={800} height={700} />
        </div>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-2 bg-[#FAF4F4;] p-6  -mt-[220px]">
        <div className="text-center">
          <Image src="/images/table.png" alt="Side Table" width={400} height={400} className="mx-auto" />
          <h2 className="text-3xl font-bold text-[40px] -mt-11 -ml-[40%]">Side table</h2>
          <a href="#" className="text-black -ml-[50%] text-2xl underline block mt-8">View More</a>
        </div>
        <div className="text-center">
          <Image src="/images/sofa.png" alt="Sofa" width={400} height={400} className="mx-auto" />
          <h2 className="text-3xl font-bold text-[40px] -mt-4 -ml-[31%]">Side table</h2>
          <a href="#" className="text-black -ml-[40%] text-2xl underline block mt-8">View More</a>
          
        </div>
        
      </div>

      {/* Top Picks Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Top Picks For You</h2>
          <p className="text-gray-600 mb-8">
            Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4">
                <Image src={product.image} alt={product.name} width={300} height={200} className="h-40 w-full object-cover rounded-md mb-4" />
                <h3 className="text-[24] font-semibold text-gray-800">{product.name}</h3>
                <p className="text-black  font-bold">{product.price}</p>
              </div>
            ))}
          </div>
          <button className="mt-6 px-6 py-2  text-black  ">
            View More
      {/* Underline with Gap */}
      <div className="w-20 h-1 bg-black mt-2"></div>
          </button>
           {/* Featured Section */}
      <div className="mt-10 flex justify-between items-center bg-white p-6 shadow-lg rounded-lg">
        <Image src="/asgaard-sofa.png" alt="Asgaard Sofa" width={400} height={250} />
        <div className="text-right">
          <h2 className="text-2xl font-bold">New Arrivals</h2>
          <h3 className="text-3xl font-extrabold mt-2">Asgaard Sofa</h3>
          <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg">Order Now</button>
        </div>
      </div>
        </div>
      </section>
    </div>
  );
}