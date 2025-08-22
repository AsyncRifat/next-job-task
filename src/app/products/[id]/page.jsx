// Fetch single product by id from API (server-side)
async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
}

export default async function ProductDetails({ params }) {
  const product = await getProduct(params.id); // Get product by id

  return (
    <div className="text-center text-black pt-20">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      {/* Description */}
      <p className="text-gray-600 mb-4">{product.description}</p>
      {/* Price */}
      <p className="text-2xl font-bold mb-8">${product.price.toFixed(2)}</p>
    </div>
  );
}
