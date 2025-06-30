import React from 'react';
import { Users, Coffee, Clock, Heart, Target, Sparkles, Zap, Shield } from 'lucide-react';

const Agence = () => {
  const stats = [
    { number: "6+", label: "Sites créés", icon: <Target className="w-6 h-6" /> },
    { number: "6+", label: "Années d'expérience", icon: <Clock className="w-6 h-6" /> },
    { number: "100%", label: "Clients satisfaits", icon: <Heart className="w-6 h-6" /> },
    { number: "7j/7", label: "À votre écoute", icon: <Users className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: "Simplicité",
      description: "Je transforme vos idées en solutions simples et efficaces, sans jargon technique.",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Rapidité",
      description: "Votre site sera livré dans les délais convenus, prêt à conquérir vos clients.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Accompagnement",
      description: "Je vous guide à chaque étape et reste disponible même après la mise en ligne.",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const services = [
    { 
      name: "Sites vitrines", 
      description: "Pour présenter votre activité avec style",
      popularity: 95 
    },
    { 
      name: "Boutiques en ligne", 
      description: "Pour vendre vos produits 24h/24", 
      popularity: 88 
    },
    { 
      name: "Développement sur-mesure", 
      description: "Solutions techniques personnalisées", 
      popularity: 92 
    },
    { 
      name: "Interface utilisateur (UI/UX)", 
      description: "Design intuitif et moderne", 
      popularity: 90 
    },
    { 
      name: "Référencement Google (SEO)", 
      description: "Pour être trouvé sur internet", 
      popularity: 94 
    },
    { 
      name: "Charte graphique", 
      description: "Identité visuelle complète", 
      popularity: 85 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-light mb-6 text-gray-800">
                Bonjour, je crée{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  votre site web
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Vous êtes{" "}
                <span className="text-gray-800 font-medium">artisan, commerçant, entrepreneur ou dirigez une entreprise</span> ?{" "}
                En tant qu'<span className="text-gray-800 font-medium">ingénieur expert en développement web et chef de projet digital</span>, je vous aide à créer un{" "}
                <span className="text-gray-800 font-medium">site web professionnel</span> qui vous ressemble et{" "}
                <span className="text-gray-800 font-medium">attire plus de clients</span>. Pas de prise de tête, juste des résultats !
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.location.href = '/realisations'}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
                >
                  Voir mes créations
                </button>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-purple-400 hover:text-purple-600 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                >
                  Me contacter
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 shadow-lg border border-gray-100">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm rotate-12 hover:rotate-0 transition-transform duration-300 shadow-lg">
                Disponible !
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg font-bold text-sm -rotate-12 hover:rotate-0 transition-transform duration-300 shadow-lg">
                ✨ Créatif & efficace
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-800">
                Mon{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Approche
                </span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  <span className="text-gray-800 font-semibold">Ingénieur expert en développement web et chef de projet digital depuis plus de 6 ans</span>, j'ai une mission simple : 
                  vous aider à briller sur internet sans vous compliquer la vie.
                </p>
                <p>
                  Mon parcours d'ingénieur m'a appris la rigueur et l'efficacité, mais je crois surtout que chaque business mérite un site web qui lui ressemble. Que vous soyez{" "}
                  <span className="text-gray-800 font-medium">boulanger, plombier, coach, ou que vous dirigiez une entreprise</span>, 
                  votre site doit raconter votre histoire et convaincre vos futurs clients.
                </p>
                <p>
                  Mon secret ? <span className="text-gray-800 font-medium">Allier expertise technique et écoute humaine</span>. 
                  Pas de blabla technique, juste des solutions robustes et efficaces pour faire grandir votre activité.
                </p>
                <p className="text-purple-600 font-medium italic">
                  "Avec ma formation d'ingénieur, je vous garantis un site techniquement solide, mais surtout facile à utiliser au quotidien !"
                </p>
              </div>
            </div>

            <div className="space-y-6 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Ce que je peux créer pour vous</h3>
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="text-gray-800 font-medium block">{service.name}</span>
                      <span className="text-gray-500 text-sm">{service.description}</span>
                    </div>
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold text-lg">
                      {service.popularity}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-purple-500/25"
                      style={{ width: `${service.popularity}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
              Pourquoi{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                me choisir ?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Parce que votre réussite, c'est aussi la mienne !
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-100">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 text-center">
            <div className="text-6xl mb-6">💬</div>
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 mb-8 italic">
              "Exactement ce dont j'avais besoin ! Simple, efficace et mon chiffre d'affaires a augmenté de 40% depuis la mise en ligne."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-800">Marie Dubois</div>
                <div className="text-gray-500 text-sm">Boulangerie artisanale, Ardèche</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
            Prêt à{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              décoller ?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discutons de votre projet ! Je vous explique tout sans engagement, 
            et je vous donne déjà quelques conseils gratuits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/devis'}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              <Coffee className="w-5 h-5 mr-2" />
              Parlons de votre projet
            </button>
            <button
              onClick={() => window.location.href = '/realisations'}
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-purple-400 hover:text-purple-600 transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              Voir mes créations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agence;