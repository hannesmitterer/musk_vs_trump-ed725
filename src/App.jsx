import React from 'react';

function App() {
  return (
    <div style={{
      width: '100%',
      padding: '1em',
      textAlign: 'center',
      background: '#222',
      color: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <h3>🚀 Deploy Your Own Site</h3>
      <a
        href="https://app.netlify.com/start/deploy?repository=https://github.com/hannesmitterer/musk_vs_trump"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          fontSize: '1.2em',
          padding: '0.8em 1.5em',
          background: '#00ad9f',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          textDecoration: 'none',
          fontWeight: 'bold',
          margin: '1em 0'
        }}
      >
        Setup & Run Live Site
      </a>
      <div style={{marginTop: '1em', fontSize: '0.95em'}}>
        Instantly deploy your own live static site—no login or setup needed!
      </div>
      {/* Existing content goes here */}
    </div>
  );
}

export default App;