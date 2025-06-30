'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Solutions numériques <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              sur mesure
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Transformez vos idées en outils performants. Nous créons des solutions 
            techniques adaptées à vos besoins spécifiques.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition transform hover:scale-105 shadow-xl"
            >
              Démarrer un projet
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-full transition"
            >
              Nos services
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions technologiques adaptées à chaque défi de votre entreprise
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all hover:scale-105">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-500 to-blue-700 p-8">
                <div className="text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Automatisation</h3>
                  <p className="opacity-90">
                    Automatisez vos processus répétitifs et libérez du temps pour l'essentiel
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all hover:scale-105">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-indigo-500 to-purple-700 p-8">
                <div className="text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Applications métier</h3>
                  <p className="opacity-90">
                    Des outils sur mesure conçus spécifiquement pour votre activité
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all hover:scale-105">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-teal-500 to-green-700 p-8">
                <div className="text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Intégrations API</h3>
                  <p className="opacity-90">
                    Connectez tous vos outils et centralisez vos données efficacement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Réalisations Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Nos Réalisations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques-uns des projets que nous avons menés à bien
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src="/images/project-placeholder.svg"
                      alt={`Projet ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">Projet {i}</h3>
                      <p className="text-sm opacity-90">Solution d'automatisation complète</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qui sommes-nous Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Qui sommes-nous
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Depuis plus de 10 ans, nous accompagnons les entreprises dans leur transformation digitale. 
                Notre équipe d'experts passionnés met son savoir-faire au service de vos projets.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">10+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Années d'expérience</h3>
                    <p className="text-gray-600">Une expertise solide dans le développement sur mesure</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">50+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Projets réalisés</h3>
                    <p className="text-gray-600">Des solutions déployées avec succès</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">98%</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Clients satisfaits</h3>
                    <p className="text-gray-600">Un taux de satisfaction qui parle de lui-même</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team.svg"
                  alt="Notre équipe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-6 py-4 rounded-lg bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-6 py-4 rounded-lg bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Sujet"
                  className="w-full px-6 py-4 rounded-lg bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
                <textarea
                  placeholder="Décrivez votre projet..."
                  rows={6}
                  className="w-full px-6 py-4 rounded-lg bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition transform hover:scale-105"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}