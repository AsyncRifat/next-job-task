// route.js - API route for products (GET all/single, POST add)
import fs from 'fs/promises'; // Import fs for file operations
import path from 'path'; // Import path for file path
import { NextResponse } from 'next/server'; // Import NextResponse

// Path to mock DB
const filePath = path.join(process.cwd(), 'src/data/products.json');

// GET handler: Fetch all or single product
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id'); // Get id from query
  const data = await fs.readFile(filePath, 'utf-8');
  let products = JSON.parse(data);

  if (id) {
    const product = products.find(p => p.id === parseInt(id)); // Find by id
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json(product);
  }

  return NextResponse.json(products); // Return all
}

// POST handler: Add new product
export async function POST(req) {
  const newProduct = await req.json(); // Parse body
  const data = await fs.readFile(filePath, 'utf-8');
  const products = JSON.parse(data);

  // Assign new id
  newProduct.id = products.length + 1;
  products.push(newProduct);

  // Write back to file
  await fs.writeFile(filePath, JSON.stringify(products, null, 2));

  return NextResponse.json(newProduct, { status: 201 }); // Return created product
}
