// ProductCard.js - Reusable card for product list
import Link from 'next/link'; // Import Link

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      {/* Product name */}
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      {/* Description truncate */}
      <p className="text-gray-600 mb-2">
        {product.description.slice(0, 100)}...
      </p>
      {/* Price */}
      <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
      {/* Details button */}
      <Link href={`/products/${product.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}
