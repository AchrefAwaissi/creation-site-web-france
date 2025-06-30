// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';

// export default function Devis() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     projectType: '',
//     budget: '',
//     delay: '',
//     message: ''
//   });

//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const sendQuoteRequest = (e) => {
//     e.preventDefault();

//     emailjs.send(
//       'service_b9udk6s',          // ID du service
//       'template_hnuirg7',        // ID du template (à créer sur EmailJS)
//       formData,
//       '-JcDNgvuvSJSgiJdX'           // Remplace par ta clé publique EmailJS
//     )
//     .then(() => {
//       setStatus('✅ Demande de devis envoyée ! Vous serez recontacté sous peu.');
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         projectType: '',
//         budget: '',
//         delay: '',
//         message: ''
//       });
//     })
//     .catch((error) => {
//       console.error('Erreur:', error);
//       setStatus('❌ Une erreur est survenue. Merci de réessayer plus tard.');
//     });
//   };

//   return (
// <form
//   onSubmit={sendQuoteRequest}
//   className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg space-y-6 border border-gray-100"
// >
//   <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
//     Demande de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">devis</span>
//   </h2>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//     <input
//       type="text"
//       name="name"
//       placeholder="Votre nom"
//       value={formData.name}
//       onChange={handleChange}
//       required
//       className="p-3 border border-gray-200 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 outline-none"
//     />

//     <input
//       type="email"
//       name="email"
//       placeholder="Votre email"
//       value={formData.email}
//       onChange={handleChange}
//       required
//       className="p-3 border border-gray-200 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 outline-none"
//     />

//     <input
//       type="tel"
//       name="phone"
//       placeholder="Téléphone"
//       value={formData.phone}
//       onChange={handleChange}
//       required
//       className="p-3 border border-gray-200 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 outline-none"
//     />

//     <select
//       name="projectType"
//       value={formData.projectType}
//       onChange={handleChange}
//       required
//       className="p-3 border border-gray-200 rounded-lg text-black focus:ring-2 focus:ring-yellow-400 outline-none"
//     >
//       <option value="">Type de projet</option>
//       <option value="Site vitrine">Site vitrine</option>
//       <option value="E-commerce">Site e-commerce</option>
//       <option value="Application web">Application web</option>
//       <option value="Refonte de site">Refonte de site</option>
//       <option value="Autre">Autre</option>
//     </select>

//     <select
//       name="budget"
//       value={formData.budget}
//       onChange={handleChange}
//       required
//       className="p-3 border border-gray-200 rounded-lg text-black focus:ring-2 focus:ring-yellow-400 outline-none"
//     >
//       <option value="">Budget estimé</option>
//       <option value="-1000">Moins de 1000 €</option>
//       <option value="1000-3000">1000 - 3000 €</option>
//       <option value="3000-5000">3000 - 5000 €</option>
//       <option value="5000+">Plus de 5000 €</option>
//     </select>

//     <select
//       name="delay"
//       value={formData.delay}
//       onChange={handleChange}
//       required
//       className="p-3 border border-gray-200 rounded-lg text-black focus:ring-2 focus:ring-yellow-400 outline-none"
//     >
//       <option value="">Délai souhaité</option>
//       <option value="Urgent">Urgent (moins de 2 semaines)</option>
//       <option value="1 mois">Dans 1 mois</option>
//       <option value="2-3 mois">2-3 mois</option>
//       <option value="Flexible">Flexible</option>
//     </select>
//   </div>

//   <textarea
//     name="message"
//     placeholder="Décrivez votre besoin en détail"
//     value={formData.message}
//     onChange={handleChange}
//     required
//     rows={5}
//     className="w-full p-4 border border-gray-200 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 outline-none"
//   ></textarea>

//   <button
//     type="submit"
//     className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition duration-300 shadow-sm"
//   >
//     Envoyer ma demande
//   </button>

//   {status && <p className="text-center text-sm text-green-600 mt-2">{status}</p>}
// </form>
//   );
// }
 
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Calculator, MessageSquare, User } from 'lucide-react';

export default function Devis() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    delay: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendQuoteRequest = (e) => {
    e.preventDefault();

    // Validation simple
    if (!formData.name || !formData.email || !formData.phone || !formData.projectType || !formData.budget || !formData.delay || !formData.message) {
      setStatus('❌ Veuillez remplir tous les champs obligatoires.');
      return;
    }

    setStatus('⏳ Envoi en cours...');

    emailjs.send(
      'service_b9udk6s',          // ID du service
      'template_hnuirg7',        // ID du template
      formData,
      '-JcDNgvuvSJSgiJdX'       // Ta clé publique EmailJS
    )
    .then(() => {
      setStatus('✅ Demande de devis envoyée ! Vous serez recontacté sous peu.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        delay: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Erreur:', error);
      setStatus('❌ Une erreur est survenue. Merci de réessayer plus tard.');
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-gray-800">
            Demande de <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Devis</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Obtenez une estimation personnalisée pour votre projet. Je vous répondrai sous 24h avec un devis détaillé et adapté à vos besoins.
          </p>
          
          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <span className="text-gray-700 font-medium">Remplissez le formulaire</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <span className="text-gray-700 font-medium">Je vous contacte sous 24h</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <span className="text-gray-700 font-medium">Recevez votre devis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 backdrop-blur-sm space-y-8">
            
            {/* Personal Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-purple-600" />
                Informations personnelles
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Nom complet *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all duration-300 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all duration-300 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Téléphone *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+33 6 XX XX XX XX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all duration-300 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <Calculator className="w-6 h-6 mr-3 text-purple-600" />
                Détails du projet
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Type de projet *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all duration-300 outline-none"
                  >
                    <option value="">Sélectionnez le type</option>
                    <option value="Site vitrine">🌐 Site vitrine</option>
                    <option value="E-commerce">🛒 Site e-commerce</option>
                    <option value="Application web">💻 Application web</option>
                    <option value="Refonte de site">🔄 Refonte de site</option>
                    <option value="Autre">✨ Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Budget estimé *</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all duration-300 outline-none"
                  >
                    <option value="">Sélectionnez le budget</option>
                    <option value="-1000">💡 Moins de 1000 €</option>
                    <option value="1000-3000">🚀 1000 - 3000 €</option>
                    <option value="3000-5000">⭐ 3000 - 5000 €</option>
                    <option value="5000+">🏆 Plus de 5000 €</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Délai souhaité *</label>
                  <select
                    name="delay"
                    value={formData.delay}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all duration-300 outline-none"
                  >
                    <option value="">Sélectionnez le délai</option>
                    <option value="Urgent">⚡ Urgent (moins de 2 semaines)</option>
                    <option value="1 mois">📅 Dans 1 mois</option>
                    <option value="2-3 mois">🗓️ 2-3 mois</option>
                    <option value="Flexible">🕐 Flexible</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-purple-600" />
                Description du projet
              </h3>
              <textarea
                name="message"
                placeholder="Décrivez votre projet en détail : objectifs, fonctionnalités souhaitées, inspirations, contraintes techniques..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all duration-300 outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={sendQuoteRequest}
              disabled={status.includes('⏳')}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2 disabled:cursor-not-allowed disabled:transform-none"
            >
              <Send className="w-5 h-5" />
              <span>{status.includes('⏳') ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}</span>
            </button>

            {/* Status Message */}
            {status && (
              <div className="text-center">
                {status.includes('✅') ? (
                  <div className="flex items-center justify-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-medium">{status}</span>
                  </div>
                ) : status.includes('⏳') ? (
                  <div className="flex items-center justify-center space-x-2 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-blue-700 font-medium">{status}</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-700 font-medium">{status}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Questions fréquentes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">⏱️ Combien de temps pour recevoir le devis ?</h4>
              <p className="text-gray-600 text-sm">Je vous envoie une première estimation sous 24h, suivie d'un devis détaillé après notre échange.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">💰 Le devis est-il gratuit ?</h4>
              <p className="text-gray-600 text-sm">Oui, l'estimation et le devis sont entièrement gratuits et sans engagement.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">🔄 Puis-je modifier ma demande ?</h4>
              <p className="text-gray-600 text-sm">Bien sûr ! Nous affinerons ensemble les détails lors de notre premier échange.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">📞 Comment se déroule la suite ?</h4>
              <p className="text-gray-600 text-sm">Après le devis, nous planifions un appel pour valider les détails et lancer le projet.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}