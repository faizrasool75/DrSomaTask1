import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import IntroductionSection from './components/IntroductionSection';
import WhatIsSection from './components/WhatIsSection';
import WhyChangesSection from './components/WhyChangesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TypesSection from './components/TypesSection';
import CandidatesSection from './components/CandidatesSection';
import RecoveryTimelineSection from './components/RecoveryTimelineSection';
import BenefitsSection from './components/BenefitsSection';
import SafetyBannerSection from './components/SafetyBannerSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import './App.css';

const App = () => {
  return (
    <div className="bg-white text-gray-800 antialiased">
      <HeroSection />
      <TrustSection />
      <IntroductionSection />
      <WhatIsSection />
      <WhyChangesSection />
      <HowItWorksSection />
      <TypesSection />
      <CandidatesSection />
      <RecoveryTimelineSection />
      <BenefitsSection />
      <SafetyBannerSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default App;
