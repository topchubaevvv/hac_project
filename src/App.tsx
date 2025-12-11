import { useState } from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { ThreatStats } from './components/ThreatStats';
import { LatestThreats } from './components/LatestThreats';
import { SecurityGuides } from './components/SecurityGuides';
import { ProtectionTips } from './components/ProtectionTips';
import { IncidentReporting } from './components/IncidentReporting';
import { NewsSection } from './components/NewsSection';
import { Resources } from './components/Resources';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <ThreatStats />
      <LatestThreats />
      <SecurityGuides />
      <ProtectionTips />
      <NewsSection />
      <IncidentReporting />
      <Resources />
      <ContactSection />
      <Footer />
    </div>
  );
}
