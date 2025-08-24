import React from 'react';
import MobileDeployButton from './components/MobileDeployButton';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <MobileDeployButton />
      
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#222', marginBottom: '10px' }}>
          🚀 Musk vs Trump - AI Reputation Tracker
        </h1>
        <p style={{ color: '#666', fontSize: '18px', lineHeight: '1.5' }}>
          Track and analyze the reputation of public figures through AI-powered sentiment analysis
        </p>
      </header>

      <main>
        <div style={{ 
          background: '#f8f9fa', 
          padding: '30px', 
          borderRadius: '12px', 
          marginBottom: '30px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{ color: '#00ad9f', marginBottom: '20px' }}>
            🎯 Project Status
          </h2>
          <div style={{ display: 'grid', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '20px' }}>✅</span>
              <span><strong>Frontend:</strong> React application deployed to GitHub Pages</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '20px' }}>✅</span>
              <span><strong>Backend:</strong> Python Flask server with automation</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '20px' }}>🔄</span>
              <span><strong>AI Integration:</strong> In development</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '20px' }}>🔄</span>
              <span><strong>Data Collection:</strong> Planned</span>
            </div>
          </div>
        </div>

        <div style={{ 
          background: '#fff', 
          padding: '30px', 
          borderRadius: '12px', 
          border: '1px solid #e9ecef',
          marginBottom: '30px'
        }}>
          <h2 style={{ color: '#222', marginBottom: '20px' }}>
            🌐 Deployment Info
          </h2>
          <p style={{ marginBottom: '15px', color: '#555' }}>
            This React application is automatically deployed to GitHub Pages using GitHub Actions.
          </p>
          <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', fontFamily: 'monospace' }}>
            <strong>Live URL:</strong> https://hannesmitterer.github.io/musk_vs_trump-ed725/
          </div>
        </div>

        <div style={{ 
          background: '#fff3cd', 
          padding: '20px', 
          borderRadius: '12px', 
          border: '1px solid #ffeaa7',
          marginBottom: '20px'
        }}>
          <h3 style={{ color: '#856404', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ⚡ Quick Start
          </h3>
          <p style={{ color: '#856404', margin: 0 }}>
            The backend server and database are ready to use. Check the README for setup instructions.
          </p>
        </div>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '40px', padding: '20px', color: '#666', fontSize: '14px' }}>
        <p>Built with React + Vite | Deployed with GitHub Actions</p>
      </footer>
    </div>
  );
}

export default App;