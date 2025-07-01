import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Download, ExternalLink, Code, Palette, Zap, Search, Filter } from 'lucide-react';

const Ressources = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', name: 'Tout', count: 24 },
    { id: 'development', name: 'Développement', count: 8 },
    { id: 'design', name: 'Design', count: 6 },
    { id: 'tools', name: 'Outils', count: 5 },
    { id: 'tutorials', name: 'Tutoriels', count: 5 }
  ];

  const resources = [
    {
      id: 1,
      type: 'tutorial',
      category: 'development',
      title: 'Guide complet React Hooks',
      description: 'Maîtrisez les hooks React avec des exemples pratiques et des cas d\'usage avancés.',
      image: '🔗',
      tags: ['React', 'JavaScript', 'Hooks'],
      downloadCount: 1250,
      format: 'PDF',
      size: '2.1 MB',
      date: '2024-01-15'
    },
    {
      id: 2,
      type: 'tool',
      category: 'design',
      title: 'Kit UI Components Figma',
      description: 'Collection de composants UI modernes prêts à utiliser pour vos projets.',
      image: '🎨',
      tags: ['Figma', 'UI Kit', 'Components'],
      downloadCount: 890,
      format: 'Figma',
      size: '15.3 MB',
      date: '2024-01-10'
    },
    {
      id: 3,
      type: 'code',
      category: 'development',
      title: 'Boilerplate Next.js + TypeScript',
      description: 'Template de démarrage avec configuration complète pour vos projets Next.js.',
      image: '⚡',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      downloadCount: 2100,
      format: 'ZIP',
      size: '5.7 MB',
      date: '2024-01-08'
    },
    {
      id: 4,
      type: 'tutorial',
      category: 'design',
      title: 'Design System from Scratch',
      description: 'Comment créer un design system cohérent et évolutif pour vos projets.',
      image: '📐',
      tags: ['Design System', 'Figma', 'Branding'],
      downloadCount: 650,
      format: 'PDF',
      size: '8.2 MB',
      date: '2024-01-05'
    },
    {
      id: 5,
      type: 'tool',
      category: 'tools',
      title: 'Collection d\'outils DevOps',
      description: 'Liste curatée des meilleurs outils pour automatiser votre workflow de développement.',
      image: '🛠️',
      tags: ['DevOps', 'Automation', 'Tools'],
      downloadCount: 430,
      format: 'JSON',
      size: '0.8 MB',
      date: '2024-01-03'
    },
    {
      id: 6,
      type: 'tutorial',
      category: 'development',
      title: 'Optimisation Performance Web',
      description: 'Techniques avancées pour optimiser les performances de vos applications web.',
      image: '⚡',
      tags: ['Performance', 'Optimization', 'Web'],
      downloadCount: 1180,
      format: 'PDF',
      size: '4.5 MB',
      date: '2023-12-28'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesFilter = activeFilter === 'all' || resource.category === activeFilter;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredArticles = [
    {
      title: "Les tendances du web design en 2024",
      excerpt: "Découvrez les dernières tendances qui façonnent le design web cette année.",
      readTime: "8 min",
      date: "15 Jan 2024",
      category: "Design"
    },
    {
      title: "React 18 : Nouvelles fonctionnalités",
      excerpt: "Tour d'horizon des nouveautés apportées par React 18 et comment les utiliser.",
      readTime: "12 min",
      date: "10 Jan 2024",
      category: "Développement"
    },
    {
      title: "Optimisation SEO pour développeurs",
      excerpt: "Techniques et bonnes pratiques pour améliorer le référencement de vos sites.",
      readTime: "15 min",
      date: "05 Jan 2024",
      category: "SEO"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-gray-800">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Ressources</span> Gratuites
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Une collection soigneusement curatée d'outils, templates, guides et tutoriels 
            pour accélérer vos projets de développement et design.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher une ressource..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-4 text-gray-700 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-purple-300'
                }`}
              >
                {category.name} <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-6 h-full hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 border border-gray-100 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{resource.image}</div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded text-gray-600 font-medium">{resource.format}</span>
                      <span>•</span>
                      <span>{resource.size}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{resource.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Download className="w-3 h-3 mr-1" />
                        {resource.downloadCount}
                      </span>
                      <span>{new Date(resource.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    
                    <button className="flex items-center text-purple-600 hover:text-blue-600 transition-colors duration-300">
                      <span className="text-sm font-medium mr-2">Télécharger</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
              Articles <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Récents</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mes derniers articles et réflexions sur le développement web et le design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-6 h-full hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 border border-gray-100 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <div className="flex items-center text-purple-600 group-hover:text-blue-600 transition-colors duration-300">
                      <span className="text-sm font-medium mr-2">Lire</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-100/50 to-blue-100/50 rounded-3xl p-12 border border-purple-200/50 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
              Restez <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">informé</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Recevez les dernières ressources, tutoriels et conseils directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 shadow-sm"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300">
                S'abonner
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Pas de spam, désabonnement en un clic.
            </p>
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
                Creationsite
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
                <li><a href="/ressources" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Ressources</a></li>
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
                © 2025 Creation Site Web Pro. Tous droits réservés.
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

export default Ressources;