import React, { useState, useEffect } from 'react';
import { Calendar, Tag, Filter } from 'lucide-react';

export default function Realisations() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [wordpressImageIndex, setWordpressImageIndex] = useState(0);
  const [wordpressScrollPosition, setWordpressScrollPosition] = useState(0);
  const [remorqueImageIndex, setRemorqueImageIndex] = useState(0);
  const [ecommerceImageIndex, setEcommerceImageIndex] = useState(0);

  // Images pour Optilogi
  const optologiImages = [
    "https://dam.malt.com/7b8c323f-aece-48ca-991b-d0a5a8acf89d?w=3840&h=3840&func=bound",
    "https://dam.malt.com/200a49d4-e905-4b5c-8c89-ffe4c34f0d34?w=3840&h=3840&func=bound",
    "https://dam.malt.com/c002b3b6-054b-449e-8d0f-68f202eab042?w=3840&h=3840&func=bound",
    "https://dam.malt.com/8b0ebec7-b21b-41dc-ac7f-21e4a7a3c294?w=3840&h=3840&func=bound",
    "https://dam.malt.com/0e3a95e6-6d75-4f0b-a5e9-1fbde03e4a52?w=3840&h=3840&func=bound",
    "https://dam.malt.com/06f294bf-2358-4fc3-a187-58a6dfeb69bf?w=3840&h=3840&func=bound",
  ];

  // Images pour WordPress
  const wordpressImages = [
    "https://dam.malt.com/c1373339-f4b6-4cb2-90ed-025ffdf577ae?w=3840&h=3840&func=bound",
  ];

  // Images pour Remorques
  const remorqueImages = [
    "https://dam.malt.com/a2e9bd8c-cd95-4018-b9ac-1e214081869f?w=650&h=650&func=bound",
    "https://dam.malt.com/47260d21-3a3d-4eb6-990c-4cb3834dd4e5?w=650&h=650&func=bound"
  ];

  // Images pour E-commerce
  const ecommerceImages = [
    "https://dam.malt.com/05048e34-dba8-426c-b5a9-39dfcf10c905?w=650&h=650&func=bound",
    "https://dam.malt.com/d81a0bd8-7c17-4ec5-af54-4184ae53e8a5?w=650&h=650&func=bound"
  ];

  // Effet pour faire défiler les images Optilogi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % optologiImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [optologiImages.length]);

  // Effet pour faire défiler les images WordPress
  useEffect(() => {
    const interval = setInterval(() => {
      setWordpressImageIndex((prevIndex) => 
        (prevIndex + 1) % wordpressImages.length
      );
    }, 4000); // Délai différent pour plus de variété

    return () => clearInterval(interval);
  }, [wordpressImages.length]);

  // Effet pour faire défiler les images Remorques
  useEffect(() => {
    const interval = setInterval(() => {
      setRemorqueImageIndex((prevIndex) => 
        (prevIndex + 1) % remorqueImages.length
      );
    }, 3500); // Délai différent pour plus de variété

    return () => clearInterval(interval);
  }, [remorqueImages.length]);

  // Effet pour faire défiler les images E-commerce
  useEffect(() => {
    const interval = setInterval(() => {
      setEcommerceImageIndex((prevIndex) => 
        (prevIndex + 1) % ecommerceImages.length
      );
    }, 4500); // Délai différent pour plus de variété

    return () => clearInterval(interval);
  }, [ecommerceImages.length]);

  // Effet pour l'animation de scroll du site WordPress
  useEffect(() => {
    const interval = setInterval(() => {
      setWordpressScrollPosition((prev) => {
        const newPosition = prev + 0.5; // Vitesse réduite de moitié
        return newPosition > 100 ? 0 : newPosition; // Reset à 0 quand on arrive à 100%
      });
    }, 50); // Animation fluide toutes les 50ms

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Optilogi - Recherche de Logement",
      client: "Optilogi",
      category: "entreprise",
      type: "Plateforme Web",
      date: "2024",
      images: optologiImages,
      description: "Plateforme de recherche de logement avec carte interactive permettant de localiser et filtrer les biens immobiliers en temps réel.",
      technologies: ["TypeScript", "React", "Nest.js", "MongoDB", "Google Cloud", "AWS", "IA"],
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "Application E-commerce Marketplace",
      client: "MarketPlace Pro",
      category: "entreprise",
      type: "Mobile App",
      date: "2024",
      images: ecommerceImages,
      description: "Application de vente en ligne type 'Le Bon Coin' avec système d'annonces, messagerie intégrée et paiement sécurisé.",
      technologies: ["React Native", "Firebase", "Tailwind CSS"],
      link: "#",
      featured: true
    },
    {
      id: 3,
      title: "Site Entreprise de Remorques",
      client: "Remorques Bordeaux",
      category: "entreprise",
      type: "Site Vitrine",
      date: "2023",
      images: remorqueImages,
      description: "Site vitrine professionnel pour une société de remorques à Bordeaux avec catalogue produits et demande de devis.",
      technologies: ["WordPress", "Thème HTML/CSS", "Bootstrap"],
      link: "#",
      featured: false
    },
    {
      id: 4,
      title: "Boulangerie Artisanale Ardèche",
      client: "Boulangerie du Village",
      category: "artisan",
      type: "Site Vitrine",
      date: "2023",
      image: "https://dam.malt.com/2f791fe5-b57a-4658-b9ee-1f489578125f?w=3840&h=3840&func=bound",
      description: "Site web pour boulangerie artisanale en Ardèche avec présentation des produits, horaires et actualités.",
      technologies: ["React", "Bootstrap", "TypeScript"],
      link: "#",
      featured: false
    },
    {
      id: 5,
      title: "Site WordPress Administrable Bordeaux",
      client: "Entreprise Bordelaise",
      category: "entreprise",
      type: "Corporate",
      date: "2023",
      images: wordpressImages,
      description: "Site WordPress administrable pour une entreprise bordelaise avec interface d'administration complète, gestion de contenu et espace client sécurisé.",
      technologies: ["WordPress", "SEO", "Contact"],
      link: "#",
      featured: false
    },
    {
      id: 6,
      title: "Société de Plomberie",
      client: "Plomberie Services",
      category: "artisan",
      type: "Site Vitrine",
      date: "2023",
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop&crop=center",
      description: "Site vitrine pour société de plomberie avec présentation des services, zone d'intervention et demande d'intervention.",
      technologies: ["React", "HTML", "CSS", "Bootstrap"],
      link: "#",
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous les projets', count: projects.length },
    { id: 'entreprise', label: 'Entreprises', count: projects.filter(p => p.category === 'entreprise').length },
    { id: 'artisan', label: 'Artisans', count: projects.filter(p => p.category === 'artisan').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  // Fonction pour rendre l'image selon le projet
  const renderProjectImage = (project, isFeatured = false) => {
    if (project.id === 1) {
      // Optilogi avec carrousel
      return (
        <div className="relative w-full h-full group">
          <div className="relative w-full h-full overflow-hidden">
            {project.images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`${project.title} - Image ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  index === currentImageIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              />
            ))}
          </div>
          
          {isFeatured && (
            <>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125 shadow-lg' 
                        : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
              
              <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </>
          )}

          {!isFeatured && (
            <>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {project.images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white' 
                        : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>
      );
    } else if (project.id === 2) {
      // E-commerce avec carrousel
      const currentIndex = ecommerceImageIndex;
      return (
        <div className="relative w-full h-full group">
          <div className="relative w-full h-full overflow-hidden">
            {project.images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`${project.title} - Image ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              />
            ))}
          </div>
          
          {isFeatured && (
            <>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setEcommerceImageIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm ${
                      index === currentIndex 
                        ? 'bg-white scale-125 shadow-lg' 
                        : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
              
              <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                {currentIndex + 1} / {project.images.length}
              </div>
            </>
          )}

          {!isFeatured && (
            <>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {project.images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white' 
                        : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                {currentIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>
      );
    } else if (project.id === 5) {
      // WordPress avec animation de scroll et carrousel
      const currentIndex = wordpressImageIndex;
      return (
        <div className="relative w-full h-full group">
          <div className="relative w-full h-full overflow-hidden">
            {project.images.map((img, index) => {
              // Pour la première image WordPress, on applique l'animation de scroll
              if (index === 0 && index === currentIndex) {
                return (
                  <div key={index} className="absolute inset-0 w-full h-full overflow-hidden bg-gray-100">
                    <img 
                      src={img} 
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-auto min-h-full object-cover object-top transition-transform duration-75 ease-linear"
                      style={{
                        transform: `translateY(-${wordpressScrollPosition}%)`,
                        minHeight: '200%' // Image plus grande pour permettre le scroll
                      }}
                    />
                    {/* Indicateur de scroll */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                      <span className="animate-pulse">🖱️ Scroll Preview</span>
                    </div>
                  </div>
                );
              } else {
                // Pour les autres images, affichage normal
                return (
                  <img 
                    key={index}
                    src={img} 
                    alt={`${project.title} - Image ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      index === currentIndex 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  />
                );
              }
            })}
          </div>
          
          {isFeatured && (
            <>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setWordpressImageIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm ${
                      index === currentIndex 
                        ? 'bg-white scale-125 shadow-lg' 
                        : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
              
              <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                {currentIndex + 1} / {project.images.length}
              </div>
            </>
          )}

          {!isFeatured && (
            <>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {project.images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white' 
                        : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                {currentIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>
      );
    } else if (project.id === 3) {
      // Remorques avec carrousel
      const currentIndex = remorqueImageIndex;
      return (
        <div className="relative w-full h-full group">
          <div className="relative w-full h-full overflow-hidden">
            {project.images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`${project.title} - Image ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              />
            ))}
          </div>
          
          {isFeatured && (
            <>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setRemorqueImageIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm ${
                      index === currentIndex 
                        ? 'bg-white scale-125 shadow-lg' 
                        : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
              
              <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                {currentIndex + 1} / {project.images.length}
              </div>
            </>
          )}

          {!isFeatured && (
            <>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {project.images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white' 
                        : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                {currentIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>
      );
    } else {
      // Image simple pour les autres projets
      return (
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
              Nos <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Réalisations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos projets web réalisés pour des entreprises et artisans. 
              Chaque projet reflète notre expertise et notre engagement envers l'excellence.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">6+</div>
              <div className="text-gray-600">Projets réalisés</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">5</div>
              <div className="text-gray-600">Années d'expérience</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">6+</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-gray-600">Projets livrés</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Projets Phares</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="aspect-video relative overflow-hidden">
                    {renderProjectImage(project, true)}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        FEATURED
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/80 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{project.date}</span>
                      <Tag className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500 capitalize">{project.category}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.client}</p>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Tous nos projets</h2>
            
            {/* Filters */}
            <div className="hidden md:flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeFilter === filter.id
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          <div className="md:hidden mb-8">
            <div className="flex gap-2 overflow-x-auto pb-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="aspect-video relative overflow-hidden">
                    {renderProjectImage(project, false)}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/80 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{project.date}</span>
                      <Tag className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500 capitalize">{project.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-3">{project.client}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-purple-100/50 to-blue-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Prêt à créer votre prochain projet ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <button
            onClick={() => window.location.href = '/devis'}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Demander un devis gratuit
          </button>
        </div>
      </section>
    </div>
  );
}