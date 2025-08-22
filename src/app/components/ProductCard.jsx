import Link from 'next/link'; // Import Link

export default function ProductCard({ product }) {
  return (
    <div className="product-card bg-teal-100 p-5 rounded-2xl">
      {/* Product name */}
      <h3 className="text-xl font-semibold mb-2 text-black">{product.name}</h3>
      {/* Description truncate */}
      <p className="text-gray-600 mb-2">
        {product.description.slice(0, 100)}...
      </p>
      {/* Price */}
      <p className="text-lg font-bold mb-4 text-black">
        ${product.price.toFixed(2)}
      </p>
      {/* Details button */}
      <Link
        href={`/products/${product.id}`}
        className="btn px-3 py-1.5 bg-cyan-800 rounded-sm hover:bg-cyan-700 font-semibold"
      >
        View Details
      </Link>
    </div>
  );
}
