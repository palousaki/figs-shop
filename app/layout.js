import './globals.css'; // Ensure Tailwind CSS styles are imported
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        {/* Header */}
        <header className="bg-customBeige shadow-sm">
          <div className="container mx-auto flex justify-between items-center p-4">
            <Link href="/" className="text-2xl font-bold">
              <Image
                src="/logo_no_bg.png"
                alt="E-Shop Logo"
                width={40}
                height={40}
                className="inline-block"
              />
              <span className="ml-2">Fig E-Shop</span>
            </Link>
            <nav className="space-x-4">
              <Link
                href="/products"
                className="text-gray-700 hover:text-gray-900"
              >
                Products
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900">
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white mt-10">
          <div className="container mx-auto p-4 text-center">
            <p>&copy; 2024 Fig E-Shop. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-gray-200"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-gray-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
