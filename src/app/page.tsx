'use client'; 

import { Nanum_Pen_Script } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const nanum = Nanum_Pen_Script({
  weight: '400',
  subsets: ['latin'],
});

type ImageType = {
  secure_url: string;
};

type Product = {
  _id: string;
  name: string;
  description: string;
  images: ImageType[]; 
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetch('https://glore-bd-backend-node-mongo.vercel.app/api/product')
      .then(res => res.json())
      .then(data => {
        setProducts(data.data);  
      })
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F5DC] text-[#5C4033] font-sans">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <span className="text-xl font-bold text-[#8B5E3C] italic">Glore BD</span>
          </Link>
          

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:font-bold hover:text-[#5C4033] transition">Home</Link>
            <Link href="#products" className="hover:font-bold hover:text-[#5C4033] transition">Products</Link>
            <Link href="#about" className="hover:font-bold hover:text-[#5C4033] transition">About</Link>
            <Link href="#contact" className="hover:font-bold hover:text-[#5C4033] transition">Contact</Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
           
            <svg
              className="w-6 h-6 text-[#5C4033]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                /> 
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                /> 
              )}
            </svg>
          </button>
           </div>
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block hover:font-bold hover:text-[#5C4033] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#products"
              className="block hover:font-bold hover:text-[#5C4033] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#about"
              className="block hover:font-bold hover:text-[#5C4033] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block hover:font-bold hover:text-[#5C4033] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </header>
      

      <section
        className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="bg-[#F5F5DC]/80 backdrop-brightness-95 w-full">
          <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mt-10 md:mt-0 relative">
              <Image
                src="/white2.jpg"
                alt="Fashion Hero"
                width={400}
                height={400}
                className="rounded-xl mx-auto"
              />
            </div>

            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl font-extrabold text-[#5C4033] leading-tight">
               Glore BD.
              </h1>
              <p className="text-lg mt-4 text-[#5C4033]">
                We got the best that you can wear or dress. Clothes that make the best you want.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-[#5C4033] text-white px-6 py-2 rounded-lg shadow hover:bg-[#3D2B1F]">
                  Visit Now
                </button>
                <button className="flex items-center gap-2 text-[#5C4033] font-medium hover:text-[#3D2B1F]">
                  ▶ Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#5C4033] mb-4">
            We provide more than just stitched fabric.
          </h2>
          <p className="text-[#8B5E3C] mb-4">
            We got the best that you can wear or a dress. Clothes that make you sophisticated.
          </p>
          <p className="text-[#8B5E3C]">
            The best that you can wear or a dress. Clothes that make you so.
          </p>
          <button className="mt-6 bg-[#5C4033] text-white px-5 py-2 rounded-lg hover:bg-[#3D2B1F]">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/white.jpg"
            alt="Side Girl"
            width={400}
            height={400}
            className="rounded-xl mx-auto"
          />
        </div>
      </section>

   
      <section className="max-w-6xl mx-auto px-4 py-16" id="products">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#5C4033]">
            Confuse your mirror by our trendy outfits.
          </h2>
          <p className="text-[#8B5E3C] mt-2">We got the best that you can wear.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link href={`/single-product/${product._id}`} key={product._id}>
              <div className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition duration-300 cursor-pointer">
                <Image
                  src={product.images[0]?.secure_url || "/placeholder.jpg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full object-cover transform transition-transform duration-100 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-[#5C4033]">{product.name}</h3>
                  <p className="text-[#8B5E3C] text-sm">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F5DC] py-12">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#5C4033]">Stay Updated!</h3>
          <p className="text-[#8B5E3C] mt-2">Subscribe to get the latest outfit drops.</p>
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border border-[#8B5E3C] w-full sm:w-auto"
            />
            <button className="bg-[#5C4033] text-white px-6 py-2 rounded-md hover:bg-[#3D2B1F]">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#EFE8D8] text-[#5C4033] py-10 mt-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
       
          <div>
            <h3 className="text-2xl font-bold text-[#5C4033]">Sweet Cloths</h3>
            <p className="mt-2 text-sm">
              Bringing you trendy, high-quality outfits that fit your vibe. Wear the best, feel the best.
            </p>
          </div>

         
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-[#3D2B1F]">Home</a></li>
              <li><a href="#" className="hover:text-[#3D2B1F]">Products</a></li>
              <li><a href="#" className="hover:text-[#3D2B1F]">Contact</a></li>
              <li><a href="#" className="hover:text-[#3D2B1F]">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-[#3D2B1F]">Facebook</a>
              <a href="#" className="hover:text-[#3D2B1F]">Instagram</a>
              <a href="#" className="hover:text-[#3D2B1F]">Twitter</a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-[#8B5E3C] mt-10">
          &copy; {new Date().getFullYear()} Sweet Cloths. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
