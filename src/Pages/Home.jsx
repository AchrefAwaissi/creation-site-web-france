import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContact = () => {
    window.location.href = '/contact';
  };

  const handleQuote = () => {
    window.location.href = '/devis';
  };

  const services = [
    {
      id: 1,
      icon: "🌐",
      subtitle: "Création de site web",
      title: "Site vitrine ou e-commerce",
      highlight: "Sur mesure",
      description: "Des sites web modernes et performants, adaptés à votre image de marque et optimisés pour convertir vos visiteurs en clients.",
      features: ["Design responsive", "Optimisation SEO", "Interface intuitive", "Performance optimisée"],
      price: "",
      gradientFrom: "from-blue-500",
      gradientTo: "to-purple-600",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      id: 2,
      icon: "WP",
      subtitle: "Développement WordPress",
      title: "Thèmes, plugins, SEO",
      highlight: "WordPress",
      description: "Solutions WordPress complètes avec thèmes personnalisés, plugins sur mesure et optimisation SEO avancée.",
      features: ["Thèmes personnalisés", "Plugins sur mesure", "Optimisation SEO", "Maintenance incluse"],
      price: "",
      gradientFrom: "from-indigo-500",
      gradientTo: "to-blue-600",
      bgGradient: "from-indigo-50 to-blue-50"
    },
    {
      id: 3,
      icon: "W",
      subtitle: "Développement Webflow",
      title: "Développement Webflow",
      description: "Sites Webflow haute performance avec animations fluides et design pixel-perfect pour une expérience utilisateur exceptionnelle.",
      features: ["Animations avancées", "CMS intégré", "Design pixel-perfect", "Hébergement rapide"],
      price: "À partir de 1290€",
      gradientFrom: "from-cyan-500",
      gradientTo: "to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50"
    },
    {
      id: 4,
      icon: "🎨",
      subtitle: "Design Figma",
      title: "Branding et maquette",
      highlight: "Figma",
      description: "Création d'identité visuelle complète et maquettes interactives pour donner vie à votre vision avant développement.",
      features: ["Identité visuelle", "Maquettes interactives", "Prototype fonctionnel", "Guide de style"],
      price: "À partir de 590€",
      gradientFrom: "from-pink-500",
      gradientTo: "to-purple-600",
      bgGradient: "from-pink-50 to-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <main className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Section d'introduction améliorée */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-6">
              Nos <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-medium">Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Nous accompagnons votre projet digital de A à Z avec des solutions sur mesure. 
              De la conception à la réalisation, notre expertise couvre tous vos besoins en développement web, 
              design et stratégie digitale pour donner vie à vos idées.
            </p>
            

            
            {/* Boutons de contact principaux */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleContact}
                className="group bg-white border-2 border-purple-200 hover:border-purple-300 text-purple-700 hover:text-purple-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:scale-105 flex items-center gap-2"
              >
                <span>Me contacter</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              <button
                onClick={handleQuote}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <span>Devis gratuit</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Grille des services améliorée */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                service={service}
                index={index}
                isActive={activeCard === service.id}
                onHover={() => setActiveCard(service.id)}
                onLeave={() => setActiveCard(null)}
              />
            ))}
          </div>

          {/* Section processus */}
          <ProcessSection />

          {/* Section témoignages */}
          <TestimonialsSection />

          {/* Section localisation */}
          <LocationSection />
        </div>
      </main>

      {/* Footer amélioré */}
      <Footer handleContact={handleContact} handleQuote={handleQuote} />
    </div>
  );
}

function ServiceCard({ service, index, isActive, onHover, onLeave }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`group cursor-pointer relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={() => window.location.href = '/realisations'}
    >
      <div className={`bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 h-auto min-h-[400px] flex flex-col justify-between hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-white/50 backdrop-blur-sm transform hover:scale-[1.02]`}>
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
              <span className="text-white font-bold text-xl">{service.icon}</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-purple-600 bg-white/80 px-3 py-1 rounded-full">
                {service.price}
              </div>
            </div>
          </div>
          
          <span className="text-sm text-gray-600 uppercase tracking-wider font-medium block mb-2">
            {service.subtitle}
          </span>
          
          <h3 className="text-2xl md:text-3xl font-light leading-tight text-gray-800 mb-2">
            {service.title}
          </h3>
          
          {service.highlight && (
            <h3 className={`text-2xl md:text-3xl font-medium bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} bg-clip-text text-transparent mb-4`}>
              {service.highlight}
            </h3>
          )}
          
          <p className="text-gray-600 leading-relaxed mb-6">
            {service.description}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                {feature}
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="flex items-center justify-between pt-4">
            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300">
              En savoir plus
            </button>
            <button className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
              <svg className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessSection() {
  const steps = [
    { icon: "💬", title: "Consultation", desc: "Échange sur vos besoins et objectifs" },
    { icon: "🎨", title: "Conception", desc: "Création des maquettes et prototypes" },
    { icon: "⚡", title: "Développement", desc: "Réalisation technique de votre projet" },
    { icon: "🚀", title: "Lancement", desc: "Mise en ligne et accompagnement" }
  ];

  return (
    <section className="py-16 bg-white rounded-3xl shadow-lg shadow-purple-500/5 mb-16">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Notre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-medium">Processus</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une méthode éprouvée en 4 étapes pour garantir le succès de votre projet digital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300 transform group-hover:scale-110">
                <span className="text-2xl">{step.icon}</span>
              </div>
              <div className="text-sm font-medium text-purple-600 mb-2">Étape {index + 1}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Meissa Jellibi",
      role: "Client satisfait",
      content: "Le développeur est très réactif et investi avec une grande expertise. Il s'adapte à nos besoins et nous propose plusieurs solutions possible selon les envies et le budget. Je recommande !",
      rating: 5
    },
    {
      name: "Armand Terry",
      role: "Client satisfait",
      content: "Je recommande vivement \"Création Site Web\" ! Le développeur a été très réactif, professionnel et à l'écoute tout au long du projet. Le site est fluide, bien pensé, et correspond parfaitement à mes besoins. Un grand merci pour ce travail sérieux et de qualité. Je suis très satisfait du résultat.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
          Ils nous font <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-medium">confiance</span>
        </h2>
        <p className="text-gray-600">
          Découvrez les avis authentiques de nos clients et{' '}
          <a 
            href="https://www.google.com/maps/place/Creation+De+Site+Web/@44.821651,-0.6085022,20z/data=!4m6!3m5!1s0xd54d96bfaff1e41:0xf29af291638a580f!8m2!3d44.8216514!4d-0.6081928!16s%2Fg%2F11xh2m1n18?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-700 font-medium underline"
          >
            regardez la boutique
          </a>
          {' '}sur Google Maps
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 shadow-lg shadow-purple-500/5 border border-gray-100">
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
              "{testimonial.content}"
            </p>
            <div>
              <div className="font-semibold text-gray-800">{testimonial.name}</div>
              <div className="text-purple-600 text-sm">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="py-16 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
          Notre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-medium">Localisation</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Basés à Bordeaux, nous servons nos clients dans toute la France avec un accompagnement personnalisé
        </p>
      </div>
      
      <div className="bg-white rounded-3xl shadow-lg shadow-purple-500/5 border border-gray-100 overflow-hidden">
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Creation De Site Web</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Bordeaux, Nouvelle-Aquitaine</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Service disponible dans toute la France</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Disponible 7j/7 pour vos projets</span>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="https://www.google.com/maps/place/Creation+De+Site+Web/@44.821651,-0.6085022,20z/data=!4m6!3m5!1s0xd54d96bfaff1e41:0xf29af291638a580f!8m2!3d44.8216514!4d-0.6081928!16s%2Fg%2F11xh2m1n18?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Voir sur Google Maps
                </a>
              </div>
            </div>
            
            <div className="h-80 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d342.35814!2d-0.6085022!3d44.821651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d96bfaff1e41%3A0xf29af291638a580f!2sCreation%20De%20Site%20Web!5e0!3m2!1sfr!2sfr!4v1641234567890!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Creation De Site Web"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ handleContact, handleQuote }) {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Sites vitrines</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">E-commerce</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">WordPress</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Webflow</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/agence" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">À propos</a></li>
              <li><a href="/realisations" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Réalisations</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Contact</a></li>
              <li><a href="/devis" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Devis gratuit</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Prêt à créer votre site web ?
            </h3>
            <p className="text-gray-300 mb-6">
              Demandez votre devis gratuit et personnalisé en quelques clics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 MakStarWeb. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}