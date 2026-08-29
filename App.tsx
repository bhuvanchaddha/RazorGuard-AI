import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RiskProvider, useRisk } from './context/RiskContext';
import { ToastContainer } from './components/common/Toast';

// Landing Page Components
import { Navbar } from './components/landing/Navbar';
import { HeroSection } from './components/landing/HeroSection';
import { ProblemSection } from './components/landing/ProblemSection';
import { RiskEngineHub } from './components/landing/RiskEngineHub';
import { LiveAnalyzer } from './components/landing/LiveAnalyzer';
import { AiInvestigatorSection } from './components/landing/AiInvestigatorSection';
import { ArchitectureSection } from './components/landing/ArchitectureSection';
import { CtaSection } from './components/landing/CtaSection';
import { Footer } from './components/landing/Footer';

// Dashboard View
import { DashboardLayout } from './components/dashboard/DashboardLayout';

const AppContent: React.FC = () => {
  const { currentView } = useRisk();

  return (
    <div className="relative min-h-screen bg-[#F7F8FA] text-[#111827] selection:bg-[#6C3CF0] selection:text-white">
      {/* View Switcher */}
      <AnimatePresence mode="wait">
        {currentView === 'landing' ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="relative z-10 flex flex-col min-h-screen"
          >
            <Navbar />
            <main className="flex-1">
              <HeroSection />
              <ProblemSection />
              <RiskEngineHub />
              <LiveAnalyzer />
              <AiInvestigatorSection />
              <ArchitectureSection />
              <CtaSection />
            </main>
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="relative z-10"
          >
            <DashboardLayout />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Toast System */}
      <ToastContainer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <RiskProvider>
      <AppContent />
    </RiskProvider>
  );
};

export default App;
