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
      className="max-w-xl mx-auto bg-gray-200 p-6 rounded-lg shadow-lg text-black"
    >
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-cyan-500 bg-teal-50 border-gray-300 text-black mb-5"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-cyan-500 bg-teal-50 border-gray-300 text-black mb-5"
        rows={4}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        className="form-input w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-cyan-500 bg-teal-50 border-gray-300 text-black mb-5"
        required
      />
      <button
        type="submit"
        className="btn w-full bg-cyan-800 py-2 rounded-lg text-teal-50"
      >
        Add Product
      </button>
    </form>
  );
}
