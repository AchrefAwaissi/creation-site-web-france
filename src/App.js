import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar'; // Assurez-vous que le chemin est correct
import Home from './Pages/Home';
import Services from './Pages/Services';
import Agence from './Pages/Agence';
import Realisations from './Pages/Realisations';
import Contact from './Pages/Contact';
import Devis from './Pages/Devis';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        {/* Navbar globale pour toutes les pages */}
        <Navbar />
        
        {/* Contenu des pages avec padding-top pour éviter le chevauchement avec la navbar fixe */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/agence" element={<Agence />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/devis" element={<Devis />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}