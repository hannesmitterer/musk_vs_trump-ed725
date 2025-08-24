# Musk vs Trump - GitHub Pages Deployment

This directory contains the GitHub Pages deployment for the Musk vs Trump AI Reputation Tracker.

## Files

- `index.html` - Main dashboard page with interactive visualizations
- `app.js` - JavaScript functionality and mock data simulation
- `_config.yml` - GitHub Pages configuration

## Features

### Interactive Dashboard
- **Real-time Reputation Scores**: Live comparison between Musk and Trump
- **Interactive Charts**: 7/14/30-day trend analysis using Chart.js
- **Reputation Barometer**: Visual gauge showing current leader
- **AI Sentiment Analysis**: Breakdown of positive/neutral/negative sentiment
- **Key Metrics**: Statistics on posts analyzed, engagement, and mentions

### Technical Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Live Data Simulation**: Updates every 10 seconds to simulate real-time data
- **Interactive Controls**: Refresh data, change time ranges, export CSV
- **Beautiful UI**: Modern gradient design with animations and hover effects
- **No Build Process**: Pure HTML/CSS/JS for easy GitHub Pages deployment

## Deployment

### Automatic Deployment (Recommended)
1. Ensure this `docs/` folder is in the main branch
2. Go to repository Settings → Pages
3. Set source to "Deploy from a branch"
4. Select branch: `main` and folder: `/docs`
5. Click Save - GitHub Pages will automatically build and deploy

### Manual Verification
Visit: `https://[username].github.io/[repository-name]`

For this repository: `https://hannesmitterer.github.io/musk_vs_trump-ed725`

## Development

To test locally:
```bash
# Navigate to docs folder
cd docs

# Start a simple HTTP server
python3 -m http.server 8000
# OR
npx serve .

# Open browser to http://localhost:8000
```

## Data Sources (Demo Mode)

Currently showing simulated data with:
- Mock reputation scores with realistic trends
- Simulated sentiment analysis results  
- Generated engagement statistics
- Real-time updates every 10 seconds

## Future Enhancements

- Connect to real backend APIs from `../backend/`
- Integration with Twitter/X API for real sentiment data
- Historical data persistence
- User authentication and personalized views
- Advanced analytics and predictions