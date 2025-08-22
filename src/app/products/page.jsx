import Link from 'next/link'; // Import Link
import ProductCard from '../components/ProductCard';

async function getProducts() {
  const res = await fetch(
    'https://next-job-task-coral.vercel.app/api/products',
    {
      cache: 'no-store',
    }
  ); // No cache for fresh data
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function Products() {
  const products = await getProducts(); // Get products

  return (
    <div className="container mx-auto py-12">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} /> // Render each product
        ))}
      </div>
    </div>
  );
}
