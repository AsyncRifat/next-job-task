// route.js - NextAuth configuration with Credentials provider
import NextAuth from 'next-auth'; // Import NextAuth
import CredentialsProvider from 'next-auth/providers/credentials'; // Import Credentials provider

// Hardcoded user for demo (in production, use database and hashing)
const users = [
  { id: '1', name: 'Admin', email: 'admin@example.com', password: 'password' }, // Simple credential
];

// NextAuth handler
export const authOptions = NextAuth({
  providers: [
    CredentialsProvider({
      // Credentials form fields
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      // Authorize function to validate credentials
      async authorize(credentials) {
        const user = users.find(
          u =>
            u.name === credentials.username &&
            u.password === credentials.password
        );
        if (user) {
          return user; // Return user if valid
        }
        return null; // Return null if invalid
      },
    }),
  ],
  pages: {
    signIn: '/login', // Custom login page
  },
  callbacks: {
    // Add user id to session
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || 'secret', // Use env var in production
});

// Export handlers for GET and POST
export { authOptions as GET, authOptions as POST };
