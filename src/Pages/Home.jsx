// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../Component/Navbar';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navbar />

//       <main className="pt-20 px-6 py-16">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//           {/* 1 - Création site web */}
//           <Card
//             icon={
//               <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
//                 <span className="text-black font-bold text-xl">🌐</span>
//               </div>
//             }
//             subtitle="Création de site web"
//             title="Site vitrine ou e-commerce"
//             highlight="Sur mesure"
//           />

//           {/* 2 - WordPress */}
//           <Card
//             icon={
//               <div className="w-16 h-16 bg-indigo-500 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">WP</span>
//               </div>
//             }
//             subtitle="Développement WordPress"
//             title="Thèmes, plugins, SEO"
//             highlight="WordPress"
//           />

//           {/* 3 - Webflow */}
//           <Card
//             icon={
//               <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-2xl">W</span>
//               </div>
//             }
//             subtitle="Développement Webflow"
//             title="Développement Webflow"
//             badge="Votre site web de A à Z"
//           />

//           {/* 4 - Figma */}
//           <Card
//             icon={
//               <div className="w-16 h-16 relative">
//                 <div className="absolute top-0 left-6 w-4 h-4 bg-red-500 rounded-full" />
//                 <div className="absolute top-4 left-6 w-4 h-4 bg-purple-500 rounded-full" />
//                 <div className="absolute top-8 left-6 w-4 h-4 bg-green-500 rounded-full" />
//                 <div className="absolute top-4 left-2 w-4 h-4 bg-blue-500 rounded-full" />
//                 <div className="absolute top-4 left-10 w-4 h-4 bg-orange-500 rounded-full" />
//               </div>
//             }
//             subtitle="Design Figma"
//             title="Branding et maquette"
//             highlight="Figma"
//           />
//         </div>
//       </main>

//       {/* Bouton flottant "Demander un devis" */}
//       <div className="fixed bottom-8 right-8 z-50">
//         <Link to="/devis">
//           <button
//             className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-yellow-400/25 transition-transform transform hover:scale-105"
//           >
//             Demander un devis
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// function Card({ icon, subtitle, title, highlight, badge }) {
//   return (
//     <div className="group cursor-pointer relative">
//       <div className="bg-gray-900 rounded-2xl p-8 h-80 flex flex-col justify-between hover:bg-gray-800 transition-all duration-300">
//         <div>
//           <div className="w-16 h-16 mb-6">{icon}</div>
//           <span className="text-sm text-gray-400 uppercase tracking-wider">{subtitle}</span>
//         </div>
//         <div className="flex items-center justify-between">
//           <div>
//             <h3 className="text-2xl md:text-3xl font-light leading-tight">{title}</h3>
//             {highlight && <h3 className="text-2xl md:text-3xl font-light">{highlight}</h3>}
//           </div>
//           <Link to="/realisations">
//             <svg
//               className="w-8 h-8 text-gray-400 group-hover:text-yellow-400 transition-transform duration-300 transform group-hover:translate-x-2"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//             </svg>
//           </Link>
//         </div>
//       </div>
//       {badge && (
//         <div className="absolute top-0 right-0 transform -translate-y-2 translate-x-2 bg-white text-black px-3 py-1 rounded text-xs font-bold shadow-lg">
//           {badge}
//         </div>
//       )}
//     </div>
//   );
// }
import React from 'react';

export default function Home() {
  const handleContact = () => {
    window.location.href = '/contact';
  };

  const handleQuote = () => {
    // Remplacez par votre logique de devis
    window.location.href = '/devis';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <main className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Section d'introduction */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Nos <a href="/services" className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300">Services</a>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Nous accompagnons votre projet digital de A à Z avec des solutions sur mesure. 
              De la conception à la réalisation, notre expertise couvre tous vos besoins en développement web, 
              design et stratégie digitale pour donner vie à vos idées.
            </p>
            
            {/* Boutons de contact principaux */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleContact}
                className="bg-white border-2 border-purple-200 hover:border-purple-300 text-purple-700 hover:text-purple-800 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:scale-105"
              >
                Me contacter
              </button>
              <button
                onClick={handleQuote}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
              >
                Demander un devis
              </button>
            </div>
          </div>

          {/* Grille des services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* 1 - Création site web */}
            <Card
              icon={
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">🌐</span>
                </div>
              }
              subtitle="Création de site web"
              title="Site vitrine ou e-commerce"
              highlight="Sur mesure"
              badge="Votre site web de A à Z"
              gradientFrom="from-blue-500"
              gradientTo="to-purple-600"
            />

            {/* 2 - WordPress */}
            <Card
              icon={
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">WP</span>
                </div>
              }
              subtitle="Développement WordPress"
              title="Thèmes, plugins, SEO"
              highlight="WordPress"
              badge="Votre site web de A à Z"
              gradientFrom="from-indigo-500"
              gradientTo="to-blue-600"
            />

            {/* 3 - Webflow */}
            <Card
              icon={
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">W</span>
                </div>
              }
              subtitle="Développement Webflow"
              title="Développement Webflow"
              badge="Votre site web de A à Z"
              gradientFrom="from-cyan-500"
              gradientTo="to-blue-600"
            />

            {/* 4 - Figma */}
            <Card
              icon={
                <div className="w-16 h-16 relative">
                  <div className="absolute top-0 left-6 w-4 h-4 bg-red-500 rounded-full shadow-md" />
                  <div className="absolute top-4 left-6 w-4 h-4 bg-purple-500 rounded-full shadow-md" />
                  <div className="absolute top-8 left-6 w-4 h-4 bg-green-500 rounded-full shadow-md" />
                  <div className="absolute top-4 left-2 w-4 h-4 bg-blue-500 rounded-full shadow-md" />
                  <div className="absolute top-4 left-10 w-4 h-4 bg-orange-500 rounded-full shadow-md" />
                </div>
              }
              subtitle="Design Figma"
              title="Branding et maquette"
              highlight="Figma"
              badge="Votre site web de A à Z"
              gradientFrom="from-pink-500"
              gradientTo="to-purple-600"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo et description */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                MakStarWeb
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Ingénieur expert en développement web et chef de projet digital. 
                Je crée des sites web professionnels qui attirent plus de clients 
                pour les artisans, commerçants et entreprises.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-sm">📧</span>
                </button>
                <button className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-sm">💼</span>
                </button>
                <button className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-sm">📱</span>
                </button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Sites vitrines</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">E-commerce</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">WordPress</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Webflow</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Design Figma</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Référencement SEO</a></li>
              </ul>
            </div>

            {/* Liens utiles */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="/agence" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">À propos</a></li>
                <li><a href="/realisations" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Réalisations</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Services</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Contact</a></li>
                <li><a href="/devis" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Devis gratuit</a></li>
              </ul>
            </div>
          </div>

          {/* CTA Section dans le footer */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Prêt à créer votre site web ?
              </h3>
              <p className="text-gray-300 mb-6">
                Demandez votre devis gratuit et personnalisé en quelques clics
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleQuote}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Demander un devis gratuit
                </button>
                <button
                  onClick={handleContact}
                  className="border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-purple-400 font-semibold px-8 py-3 rounded-full transition-all duration-300"
                >
                  Me contacter
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 WebDev Pro. Tous droits réservés.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/mentions-legales" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                  Mentions légales
                </a>
                <a href="/politique-confidentialite" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                  Politique de confidentialité
                </a>
                <a href="/cgv" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                  CGV
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bouton flottant "Demander un devis" */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleQuote}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-6 py-3 rounded-full shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
        >
          Demander un devis
        </button>
      </div>
    </div>
  );
}

function Card({ icon, subtitle, title, highlight, badge, gradientFrom, gradientTo }) {
  const handleCardClick = () => {
    window.location.href = '/realisations';
  };

  return (
    <div className="group cursor-pointer relative" onClick={handleCardClick}>
      <div className="bg-white rounded-2xl p-8 h-80 flex flex-col justify-between hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-100 backdrop-blur-sm">
        <div>
          <div className="w-16 h-16 mb-6">{icon}</div>
          <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">{subtitle}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-light leading-tight text-gray-800">{title}</h3>
            {highlight && (
              <h3 className={`text-2xl md:text-3xl font-light bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>
                {highlight}
              </h3>
            )}
          </div>
          <button
            className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300"
          >
              <svg
                className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-all duration-300 transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
        </div>
      </div>
      {badge && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          {badge}
        </div>
      )}
    </div>
  );
}