// ProductForm.js - Form for adding new products
import { useState } from 'react'; // Import state
import { useRouter } from 'next/navigation'; // Import router

export default function ProductForm() {
  const [name, setName] = useState(''); // Name state
  const [description, setDescription] = useState(''); // Description state
  const [price, setPrice] = useState(''); // Price state
  const router = useRouter(); // Router for redirect

  // Handle submit
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price: parseFloat(price) }),
    });
    if (res.ok) {
      router.push('/products'); // Redirect to products on success
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-gray-500 p-6 rounded-lg shadow-md text-black"
    >
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="form-input mb-4 w-full border px-2 rounded-sm"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="form-input mb-4  w-full border px-2 rounded-sm"
        rows={4}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        className="form-input mb-4 w-full border px-2 rounded-sm"
        required
      />
      <button type="submit" className="btn w-full">
        Add Product
      </button>
    </form>
  );
}
