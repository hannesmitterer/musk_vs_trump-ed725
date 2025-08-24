# Musk vs Trump - AI Reputation Tracker

This project tracks and analyzes the reputation of public figures through AI-powered sentiment analysis.

## Project Structure

```
/ai-reputation-tracker
├── backend/
│   ├── app.py                 # Main Flask/Django application
│   ├── models.py              # Database models
│   ├── data_collector.py      # Data collection logic
│   ├── sentiment_analyzer.py  # AI sentiment analysis
│   ├── db_manager.py          # Database management utilities
│   ├── requirements.txt       # Python dependencies
│   └── start_backend.sh       # Backend automation script
├── frontend/
│   ├── App.js
│   └── ReputationGraph.js
├── database/
│   └── schema.sql
└── README.md
```

## Backend Setup

### Automated Setup (Recommended)

The backend includes two automation options for easy setup:

#### Option 1: Shell Script
```bash
cd backend
./start_backend.sh
```

#### Option 2: Makefile
```bash
cd backend
make setup  # Complete setup and start server
# OR run individual steps:
make install-deps  # Install dependencies only
make init-db       # Initialize database only
make start-server  # Start server only
make help          # Show available commands
```

Both automation methods will:
1. 🐍 **Install Python dependencies** from `requirements.txt`
2. 🗄️ **Initialize the database** using `db_manager.create_tables()`
3. 🌐 **Start the backend server** with `python app.py`

### Manual Setup

If you prefer to set up the backend manually:

1. **Install dependencies:**
   ```bash
   cd backend
   pip3 install -r requirements.txt
   ```

2. **Initialize the database:**
   ```bash
   python3 -c "import db_manager; db_manager.create_tables()"
   ```

3. **Start the server:**
   ```bash
   python3 app.py
   ```

## Prerequisites

- Python 3.x
- pip (Python package manager)

## Development

### Backend Development

The backend includes two automation options:

#### Shell Script (`start_backend.sh`)
- ✅ Error handling and validation
- ⚠️ Informative warnings for missing files
- 🚀 Automatic dependency management
- 🔄 Database initialization
- 📝 Clear logging and status messages

#### Makefile
- 🎯 Granular control with individual targets
- 🧹 Cleanup utilities (`make clean`)
- 📋 Help documentation (`make help`)
- 🔧 Flexible build automation

### Adding New Dependencies

1. Add your package to `backend/requirements.txt`
2. Run `./start_backend.sh` to automatically install new dependencies

## Troubleshooting

- **Python not found**: Ensure Python 3.x is installed and available in your PATH
- **Permission denied**: Make sure `start_backend.sh` is executable (`chmod +x start_backend.sh`)
- **Module import errors**: Verify all dependencies are installed via `requirements.txt`
- **Database errors**: Ensure `db_manager.py` exists and has a `create_tables()` function

## License

[Add your license information here]

## GitHub Pages Deployment

### 📊 Live Interactive Dashboard

This repository includes a **beautiful, interactive HTML dashboard** deployed via GitHub Pages that visualizes the Musk vs Trump reputation comparison in real-time.

**🔗 View Live Dashboard:** `https://[your-username].github.io/musk_vs_trump-ed725`

### Features of the GitHub Pages Dashboard

- **🎯 Real-time Reputation Scores**: Live comparison between Musk and Trump with trend indicators
- **📊 Interactive Charts**: 7/14/30-day trend analysis with beautiful visualizations
- **⏲️ Reputation Barometer**: Visual gauge showing current reputation leader
- **🧠 AI Sentiment Analysis**: Breakdown of positive/neutral/negative sentiment
- **📈 Key Metrics**: Statistics on posts analyzed, engagement, and media mentions
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🔄 Live Updates**: Simulated real-time data updates every 10 seconds
- **💾 Data Export**: Download reputation data as CSV files
- **🎨 Beautiful UI**: Modern gradient design with smooth animations

### Quick Deployment

1. **Automatic Setup** (Recommended):
   - Go to your repository Settings → Pages
   - Set source to "Deploy from a branch"
   - Select branch: `main` and folder: `/docs`
   - Click Save - GitHub Pages will automatically build and deploy

2. **Manual Verification**:
   - Visit: `https://[your-username].github.io/[repository-name]`
   - The dashboard should load with interactive charts and real-time data

### Technical Stack

- **Pure HTML/CSS/JavaScript** - No build process required
- **Chart.js** - Interactive charts and visualizations
- **Font Awesome** - Beautiful icons (with emoji fallbacks)
- **Responsive Grid Layout** - Mobile-first design
- **Mock Data API** - Simulated real-time reputation tracking

### Files Structure

```
docs/
├── index.html      # Main dashboard page
├── app.js          # Interactive functionality and mock data
├── README.md       # Deployment documentation
└── _config.yml     # GitHub Pages configuration
```

### Future Enhancements

The dashboard is currently in **demo mode** with simulated data. Future versions will:

- Connect to the Flask backend APIs (`/backend/app.py`)
- Integrate with real Twitter/X sentiment analysis
- Add historical data persistence
- Include user authentication and personalized views