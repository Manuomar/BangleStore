export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-6">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} Bangle Bazaar. All rights reserved.
      </div>
    </footer>
  )
}
