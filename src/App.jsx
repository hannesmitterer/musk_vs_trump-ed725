import React from 'react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        width: '100%',
        padding: '1em',
        textAlign: 'center',
        background: '#222',
        color: '#fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
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
            margin: '1em 0',
            boxShadow: '0 4px 15px rgba(0,173,159,0.3)',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          Setup & Run Live Site
        </a>
        <div style={{marginTop: '1em', fontSize: '0.95em'}}>
          Instantly deploy your own live static site—no login or setup needed!
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2em',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3em',
          fontWeight: 'bold',
          marginBottom: '0.5em',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Musk vs Trump
        </h1>
        <h2 style={{
          fontSize: '1.5em',
          fontWeight: 'normal',
          marginBottom: '2em',
          opacity: '0.9'
        }}>
          AI Reputation Tracker
        </h2>
        
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '15px',
          padding: '2em',
          marginBottom: '2em',
          boxShadow: '0 8px 32px rgba(31,38,135,0.37)',
          border: '1px solid rgba(255,255,255,0.18)'
        }}>
          <h3 style={{marginBottom: '1em'}}>✨ Features</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5em',
            marginTop: '1.5em'
          }}>
            <div>
              <h4>📊 Real-time Analytics</h4>
              <p style={{opacity: '0.8', fontSize: '0.9em'}}>
                Track sentiment changes across social media platforms
              </p>
            </div>
            <div>
              <h4>🤖 AI-Powered Insights</h4>
              <p style={{opacity: '0.8', fontSize: '0.9em'}}>
                Advanced sentiment analysis using machine learning
              </p>
            </div>
            <div>
              <h4>📈 Interactive Visualizations</h4>
              <p style={{opacity: '0.8', fontSize: '0.9em'}}>
                Beautiful charts and graphs to visualize reputation trends
              </p>
            </div>
          </div>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '15px',
          padding: '2em',
          boxShadow: '0 8px 32px rgba(31,38,135,0.37)',
          border: '1px solid rgba(255,255,255,0.18)'
        }}>
          <h3>🌐 GitHub Pages Deployment Status</h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '1em 0',
            gap: '1em',
            flexWrap: 'wrap'
          }}>
            <span style={{
              background: '#4CAF50',
              color: 'white',
              padding: '0.5em 1em',
              borderRadius: '25px',
              fontSize: '0.9em',
              fontWeight: 'bold'
            }}>
              ✅ Vite Config: Configured
            </span>
            <span style={{
              background: '#4CAF50',
              color: 'white',
              padding: '0.5em 1em',
              borderRadius: '25px',
              fontSize: '0.9em',
              fontWeight: 'bold'
            }}>
              ✅ React App: Working
            </span>
            <span style={{
              background: '#4CAF50',
              color: 'white',
              padding: '0.5em 1em',
              borderRadius: '25px',
              fontSize: '0.9em',
              fontWeight: 'bold'
            }}>
              ✅ GitHub Actions: Ready
            </span>
          </div>
          <p style={{marginTop: '1em', opacity: '0.9'}}>
            🎉 Successfully deployed to GitHub Pages!<br/>
            <code style={{
              background: 'rgba(0,0,0,0.2)',
              padding: '0.3em 0.6em',
              borderRadius: '4px',
              fontSize: '0.85em'
            }}>
              https://hannesmitterer.github.io/musk_vs_trump-ed725/
            </code>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;