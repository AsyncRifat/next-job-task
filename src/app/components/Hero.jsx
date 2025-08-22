// Hero.js - Hero section for landing page
export default function Hero() {
  return (
    <section className="text-white py-10 text-center">
      <div className="container mx-auto">
        {/* Hero title */}
        <h1 className="text-4xl font-bold mb-4">Welcome to Job Task App</h1>
        {/* Hero description */}
        <p className="text-xl">
          Discover amazing products and manage your inventory securely.
        </p>
      </div>
    </section>
  );
}
