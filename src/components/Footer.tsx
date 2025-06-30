import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold text-gray-800">TechSolutions</p>
            <p className="text-sm">&copy; 2024 TechSolutions. Tous droits réservés.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <span>contact@techsolutions.fr</span>
            <span className="hidden md:inline">•</span>
            <span>01 23 45 67 89</span>
            <span className="hidden md:inline">•</span>
            <Link href="/mentions-legales" className="hover:text-blue-600 transition">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}