import Link from 'next/link';

export default function ProductHighlights() {
  return (
    <section className="py-12 text-black">
      <div className="container mx-auto">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Product Highlights
        </h2>
        {/* Sample highlights (static for landing) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <Link href={'/products/1'}>
            <div className="product-card py-20 text-center bg-teal-100 rounded-2xl shadow-lg transition-all hover:scale-105 hover:shadow-xl duration-500">
              <h3 className="text-xl font-semibold">Product 1</h3>
              <p>Great features at an affordable price.</p>
            </div>
          </Link>
          <Link href={'/products/2'}>
            <div className="product-card py-20 text-center bg-teal-100 rounded-2xl shadow-lg transition-all hover:scale-105 hover:shadow-xl duration-500">
              <h3 className="text-xl font-semibold">Product 2</h3>
              <p>High quality and reliable.</p>
            </div>
          </Link>
          <Link href="/products">
            <div className="product-card py-20 text-center bg-teal-100 rounded-2xl shadow-lg transition-all hover:scale-105 hover:shadow-xl duration-500">
              <h3 className="text-xl font-semibold">More...</h3>
              <p>Explore all products.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
