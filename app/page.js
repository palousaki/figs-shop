import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen p-6">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-500 mb-4">
          Discover the Finest Dried Figs
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
          Experience the richness of naturally dried figs, sourced and packed
          with care.
        </p>
        <button className="mt-8 px-6 py-3 bg-yellow-500 text-white rounded-full text-lg hover:bg-yellow-600 transition">
          Shop Now
        </button>
      </section>

      {/* Featured Products Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example of a Product Card */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-full h-40 relative">
              <Image
                src="/dried_figs.png"
                alt="Dried Fig"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-800">
              Organic Dried Figs
            </h3>
            <p className="text-gray-600 mt-2">
              Rich in flavor and naturally sweet.
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-semibold text-gray-800">$9.99</span>
              <button className="px-3 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Add more product cards as needed */}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="mt-20 py-20 bg-yellow-500 text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">
          Enjoy Free Shipping on Orders Over $50!
        </h2>
        <p className="text-lg mb-8">
          Order now to take advantage of this exclusive offer.
        </p>
        <button className="px-8 py-3 bg-white text-yellow-500 font-semibold rounded-full hover:bg-gray-100 transition">
          Start Shopping
        </button>
      </section>
    </main>
  );
}
