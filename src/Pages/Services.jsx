import React from 'react';
import { ArrowRight, Store, Globe, Palette, Zap, Wrench, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Site Vitrine",
      subtitle: "Votre carte de visite en ligne",
      description: "Parfait pour présenter votre activité, vos services et rassurer vos futurs clients. Simple, élégant et efficace !",
      features: ["Présentation de votre activité", "Galerie photos", "Formulaire de contact", "Optimisé mobile"],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Boutique en Ligne",
      subtitle: "Vendez sur internet 24h/24",
      description: "Créez votre boutique en ligne et vendez vos produits partout en France. Paiement sécurisé inclus !",
      features: ["Catalogue produits", "Panier et commandes", "Paiement sécurisé", "Gestion des stocks"],
      color: "from-green-500 to-emerald-500",
      popular: true
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Personnalisé",
      subtitle: "Un site qui vous ressemble",
      description: "Je crée un design unique pour votre marque. Logo, couleurs, style... tout est pensé pour vous démarquer !",
      features: ["Logo personnalisé", "Charte graphique", "Design sur-mesure", "Cartes de visite"],
      color: "from-purple-500 to-pink-500",
      popular: false
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Refonte de Site",
      subtitle: "Modernisez votre présence",
      description: "Votre site a quelques années ? Je le remets au goût du jour pour qu'il soit plus attractif et efficace.",
      features: ["Nouveau design moderne", "Optimisation mobile", "Amélioration vitesse", "Meilleur référencement"],
      color: "from-orange-500 to-red-500",
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Site Express",
      subtitle: "En ligne en 1 semaine",
      description: "Besoin d'un site rapidement ? Mon forfait express vous permet d'être en ligne en une semaine maximum !",
      features: ["Livraison en 7 jours", "Design moderne", "3 pages incluses", "Formation incluse"],
      color: "from-yellow-500 to-orange-500",
      popular: false
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Accompagnement",
      subtitle: "Je vous aide après la création",
      description: "Formation, maintenance, conseils... Je reste à vos côtés pour que votre site soit toujours au top !",
      features: ["Formation personnalisée", "Support technique", "Mises à jour", "Conseils marketing"],
      color: "from-indigo-500 to-purple-500",
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "On Discute",
      description: "Je vous écoute pour comprendre vos besoins et votre activité"
    },
    {
      step: "02", 
      title: "Je Crée",
      description: "Je conçois votre site avec amour et attention aux détails"
    },
    {
      step: "03",
      title: "Vous Validez",
      description: "On ajuste ensemble jusqu'à ce que ce soit parfait"
    },
    {
      step: "04",
      title: "C'est en Ligne !",
      description: "Votre site est prêt, je vous explique tout pour l'utiliser"
    }
  ];

  const benefits = [
    {
      icon: "🚀",
      title: "Plus de clients",
      description: "Un site professionnel attire plus de clients et augmente votre chiffre d'affaires"
    },
    {
      icon: "⏰",
      title: "Disponible 24h/24",
      description: "Vos clients peuvent vous découvrir et vous contacter à toute heure"
    },
    {
      icon: "💰",
      title: "Économique",
      description: "Moins cher qu'un local commercial et visible partout en France"
    },
    {
      icon: "📱",
      title: "Sur tous les écrans",
      description: "Votre site s'adapte automatiquement aux mobiles et tablettes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-gray-800">
              Mes <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Que vous soyez <span className="text-gray-800 font-medium">artisan, commerçant, entrepreneur ou dirigez une entreprise</span>, 
              j'ai la solution web qui correspond à vos besoins et votre budget. 
              <span className="text-gray-800 font-medium">Simple, efficace et sans prise de tête !</span>
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-800">
              Pourquoi avoir un <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">site web</span> ?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-800">
              Choisissez votre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">formule</span>
            </h2>
            <p className="text-gray-600">Des solutions adaptées à chaque budget et besoin</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer relative">
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                    ⭐ Populaire
                  </div>
                )}
                <div className={`bg-white rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 border-2 ${service.popular ? 'border-purple-200' : 'border-gray-100'} backdrop-blur-sm`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {React.cloneElement(service.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  
                  <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">{service.subtitle}</span>
                  <h3 className="text-2xl font-light mb-4 text-gray-800 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => window.location.href = '/devis'}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <span className="mr-2">Demander un devis</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
              Comment ça <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">se passe</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un processus simple et transparent, sans surprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-300/50 to-blue-300/50"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-800">
              Questions <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">fréquentes</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-2">💰 Comment connaître le prix ?</h3>
              <p className="text-gray-600">Chaque projet est unique ! Je vous fais un devis personnalisé gratuit selon vos besoins.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-2">⏱️ Combien de temps pour créer mon site ?</h3>
              <p className="text-gray-600">Entre 1 et 4 semaines selon la formule choisie. Je vous tiens informé à chaque étape.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-2">🤔 Et si je ne sais pas utiliser mon site ?</h3>
              <p className="text-gray-600">Je vous forme personnellement ! Vous saurez tout modifier facilement, promis.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-2">📱 Mon site sera-t-il visible sur mobile ?</h3>
              <p className="text-gray-600">Absolument ! Tous mes sites s'adaptent automatiquement aux mobiles et tablettes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-100/50 to-blue-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
            Prêt à avoir votre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">site web</span> ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discutons de votre projet ! Devis gratuit et sans engagement en 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/devis'}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Demander mon devis gratuit
            </button>
            <button
              onClick={() => window.location.href = '/realisations'}
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-purple-400 hover:text-purple-600 transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              Voir des exemples
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
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
                  onClick={() => window.location.href = '/devis'}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Demander un devis gratuit
                </button>
                <button
                  onClick={() => window.location.href = '/contact'}
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
    </div>
  );
};

export default Services;