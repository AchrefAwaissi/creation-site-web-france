import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation des champs obligatoires
    if (!formData.phone || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
      return;
    }

    setStatus('loading');

    emailjs.send(
      'service_b9udk6s',     // Ton Service ID
      'template_7tuo67n',    // Ton Template ID
      formData,
      '-JcDNgvuvSJSgiJdX'   // Ton Public Key
    )
    .then(() => {
      setStatus('success');
      setFormData({ from_name: '', phone: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    })
    .catch((error) => {
      console.error('Erreur EmailJS:', error);
      setStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Envoyez-moi un message</h2>
            <p className="text-gray-600">Remplissez le formulaire ci-dessous et je vous répondrai rapidement.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Nom (facultatif)
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="Votre nom"
                value={formData.from_name}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all duration-300 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Numéro de téléphone *
              </label>
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

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                name="message"
                placeholder="Décrivez votre projet, vos besoins ou posez votre question..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all duration-300 outline-none resize-none"
              />
            </div>

            <button
              onClick={sendEmail}
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === 'loading' ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <span>Envoyer le message</span>
              )}
            </button>

            {/* Status Message */}
            {status && status !== 'loading' && (
              <div className="text-center">
                {status === 'success' ? (
                  <div className="flex items-center justify-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <span className="text-green-700 font-medium">✅ Demande de devis envoyée ! Vous serez recontacté sous peu.</span>
                  </div>
                ) : status === 'error' ? (
                  <div className="flex items-center justify-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <span className="text-red-700 font-medium">❌ Veuillez remplir tous les champs obligatoires.</span>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>

        {/* Section additionnelle */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Pourquoi me choisir ?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold text-gray-800">Réactivité</h4>
              <p className="text-gray-600 text-sm">Réponse rapide et communication transparente.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold text-gray-800">Sur-mesure</h4>
              <p className="text-gray-600 text-sm">Solutions adaptées à vos besoins spécifiques.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-semibold text-gray-800">Performance</h4>
              <p className="text-gray-600 text-sm">Technologies modernes pour des résultats optimaux.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}