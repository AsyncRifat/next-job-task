// ProductHighlights.js - Section highlighting products on landing page
import Link from 'next/link'; // Import Link

export default function ProductHighlights() {
  return (
    <section className="py-12 text-white">
      <div className="container mx-auto">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Product Highlights
        </h2>
        {/* Sample highlights (static for landing) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="product-card">
            <h3 className="text-xl font-semibold">Product 1</h3>
            <p>Great features at an affordable price.</p>
          </div>
          <div className="product-card">
            <h3 className="text-xl font-semibold">Product 2</h3>
            <p>High quality and reliable.</p>
          </div>
          <div className="product-card">
            <h3 className="text-xl font-semibold">More...</h3>
            <p>Explore all products.</p>
          </div>
        </div>
        {/* Link to products */}
        <div className="text-center mt-8">
          <Link href="/products" className="btn">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
