// page.js - Protected page for adding products
'use client'; // Client component for form
import { useSession } from 'next-auth/react'; // Import useSession
import { useRouter } from 'next/navigation'; // Import router
import ProductForm from '../../components/ProductForm'; // Import form component

export default function AddProduct() {
  const { data: session, status } = useSession(); // Get session
  const router = useRouter(); // Router instance

  // Redirect if not authenticated
  if (status === 'loading') return <p>Loading...</p>;
  if (!session) {
    router.push('/login'); // Redirect to login
    return null;
  }

  return (
    <div className="container mx-auto py-12">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-center text-black">
        Add New Product
      </h1>
      {/* Form component */}
      <ProductForm />
    </div>
  );
}
