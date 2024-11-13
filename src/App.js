import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Digitalclock from './components/Digitalclock';
import MarketInsights from './components/MarketInsights.jsx';

function App() {
  return (
    <div className="bg-teal-50 min-h-screen flex flex-col font-serif">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-24 p-4">
        <Digitalclock />
        <MarketInsights />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
