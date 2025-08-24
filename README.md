# Musk vs Trump - AI Reputation Tracker

This project tracks and analyzes the reputation of public figures through AI-powered sentiment analysis.

## Project Structure

```
/musk_vs_trump-ed725
├── backend/
│   ├── app.py                    # Main Flask application
│   ├── db_manager.py             # Database management utilities
│   ├── requirements.txt          # Python dependencies
│   ├── start_backend.sh          # Backend automation script
│   └── Makefile                  # Build automation
├── src/
│   ├── App.jsx                   # Main React component
│   ├── main.jsx                  # React entry point
│   └── components/
│       └── MobileDeployButton.jsx
├── .github/workflows/
│   └── deploy.yml                # GitHub Pages deployment
├── package.json                  # Node.js dependencies and scripts
├── vite.config.js                # Vite build configuration
├── index.html                    # HTML entry point
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

**Backend:**
- Python 3.x
- pip (Python package manager)

**Frontend:**
- Node.js (version 18 or higher)
- npm (comes with Node.js)

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

### Frontend Development & Deployment

The frontend is a React application that automatically deploys to GitHub Pages.

#### Live Site

🌐 **Live Frontend**: https://hannesmitterer.github.io/musk_vs_trump-ed725/

#### Local Development

1. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

#### Automated Deployment

The frontend automatically deploys to GitHub Pages when changes are pushed to the `main` branch:

- **GitHub Actions Workflow**: `.github/workflows/deploy.yml`
- **Build Tool**: Vite (modern React build system)
- **Deploy Target**: `gh-pages` branch
- **Live URL**: https://hannesmitterer.github.io/musk_vs_trump-ed725/

The deployment process:
1. 🔄 Triggers on push to `main` branch
2. 🏗️ Installs Node.js dependencies
3. 🚀 Builds the React application
4. 📦 Uploads build artifacts to GitHub Pages
5. 🌐 Site is automatically available at the GitHub Pages URL

#### Frontend Structure

```
src/
├── App.jsx                          # Main application component
├── main.jsx                         # React entry point
└── components/
    └── MobileDeployButton.jsx       # Mobile deployment component
```

## Troubleshooting

- **Python not found**: Ensure Python 3.x is installed and available in your PATH
- **Permission denied**: Make sure `start_backend.sh` is executable (`chmod +x start_backend.sh`)
- **Module import errors**: Verify all dependencies are installed via `requirements.txt`
- **Database errors**: Ensure `db_manager.py` exists and has a `create_tables()` function

## License

[Add your license information here]