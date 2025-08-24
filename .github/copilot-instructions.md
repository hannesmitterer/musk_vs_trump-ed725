# Musk vs Trump AI Reputation Tracker - Development Guide

**ALWAYS follow these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the information here.**

This project is a Python Flask backend with a planned JavaScript frontend for tracking and analyzing public figure reputations through AI-powered sentiment analysis.

## Project Status
- ✅ Backend: Fully functional Flask server with automation
- ⚠️ Frontend: Partially implemented (README + React components in src/ directory)
- ❌ Testing: No testing infrastructure exists yet
- ❌ Linting: No linting configuration exists yet
- ✅ Poetry: Alternative dependency management available via pyproject.toml

## Working Effectively

### Bootstrap and Build the Repository
```bash
# Repository setup (from root directory)
cd backend
pip3 install -r requirements.txt  # Takes <1 second
python3 -c "import db_manager; db_manager.create_tables()"  # Takes <1 second
```

**Alternative with Poetry:**
```bash
# Using Poetry if preferred (pyproject.toml available)
cd /home/runner/work/musk_vs_trump-ed725/musk_vs_trump-ed725
poetry install  # Install dependencies defined in pyproject.toml
cd backend
python3 -c "import db_manager; db_manager.create_tables()"
```

### Backend Development
The backend has two validated automation options:

#### Option 1: Shell Script (Recommended)
```bash
cd backend
./start_backend.sh  # Complete setup and server start - Takes <1 second total
```

#### Option 2: Makefile
```bash
cd backend
make help           # Show available commands
make setup          # Install deps and init database - Takes <1 second
make start-server   # Start the Flask server
make clean          # Clean Python cache files
```

Both automation methods:
1. Install Python dependencies from `requirements.txt`
2. Initialize database using `db_manager.create_tables()`
3. Start Flask server on `http://localhost:5000`

### Manual Backend Setup
If automation fails:
```bash
cd backend
pip3 install -r requirements.txt
python3 -c "import db_manager; db_manager.create_tables()"
python3 app.py  # Server starts on http://localhost:5000
```

### Frontend Development
**CURRENT STATE**: Frontend is partially implemented.
- ✅ `frontend/README.md` exists with setup instructions
- ✅ `src/App.jsx` - Main React application component (IMPLEMENTED)
- ✅ `src/components/MobileDeployButton.jsx` - Mobile deployment component (IMPLEMENTED)
- ❌ No `package.json` exists yet
- ❌ No Node.js dependencies installed yet
- ⚠️ `npm install` and `npm start` will fail until package.json is created
- ℹ️ If implementing more frontend features, use existing React components as starting point

**Setup Requirements if Expanding Frontend:**
1. Create `package.json` in root or frontend directory
2. Install React and related dependencies
3. Configure build tools (Vite, Webpack, etc.)
4. The existing components in `src/` can be used as foundation

## Validation

### Always test backend changes with these steps:
1. Start the backend server (using any method above)
2. Test the main endpoint: `curl http://localhost:5000/`
   - Expected: `"Musk vs Trump Backend Server is running!"`
3. Test the health endpoint: `curl http://localhost:5000/health`
   - Expected: `{"status": "healthy", "message": "Backend server is operational"}`
4. Server runs on port 5000 in debug mode with auto-reload

### Manual Validation Scenarios
After making backend changes:
- Always test both endpoints (`/` and `/health`) respond correctly
- Verify server starts without errors in logs
- Check database initialization completes successfully
- Test automation scripts still work: `./start_backend.sh` and `make setup`

### Timing and Timeouts
All build operations are very fast - no special timeout handling needed:
- `pip3 install -r requirements.txt`: <1 second (dependencies usually cached)
- Database initialization: <1 second
- Server startup: <2 seconds
- Total setup time: <1 second (verified with `time make setup`)

## Common Tasks and Known Working Commands

### Repository Structure
```
/home/runner/work/musk_vs_trump-ed725/musk_vs_trump-ed725/
├── backend/
│   ├── app.py                 # Flask server (IMPLEMENTED)
│   ├── db_manager.py          # Database utilities (IMPLEMENTED)
│   ├── requirements.txt       # Python dependencies (IMPLEMENTED)  
│   ├── start_backend.sh       # Automation script (IMPLEMENTED)
│   └── Makefile              # Build automation (IMPLEMENTED)
├── frontend/
│   └── README.md             # Frontend docs (IMPLEMENTATION DOCS)
├── src/                       # React components directory
│   ├── App.jsx               # Main React app (IMPLEMENTED)
│   └── components/
│       └── MobileDeployButton.jsx  # Mobile deploy button (IMPLEMENTED)
├── README.md                 # Project documentation
├── info-project.txt          # Project structure reference
├── pyproject.toml           # Poetry configuration (IMPLEMENTED)
└── .github/
    └── copilot-instructions.md  # This file
```

### Key Files Content

#### backend/requirements.txt
```
# Sample requirements for the musk_vs_trump backend
flask==2.3.3
requests==2.31.0
```

#### pyproject.toml (Alternative dependency management)
```toml
[tool.poetry]
name = "musk_vs_trump_backend"
version = "0.1.0"
description = "Backend for musk_vs_trump Flask app"
authors = ["hannesmitterer <your-email@example.com>"]
readme = "README.md"
package-mode = false

[tool.poetry.dependencies]
python = "^3.13"
flask = "2.3.3"
requests = "2.31.0"
gunicorn = "^21.2.0"
```

#### Prerequisites
- Python 3.x (tested with 3.12.3, Poetry configured for 3.13+)
- pip (Python package manager)
- Poetry (optional, for alternative dependency management)
- Node.js and npm (available but frontend not fully implemented yet)

**Installation Options:**
- **Standard pip**: Use `pip3 install -r backend/requirements.txt`
- **Poetry**: Use `poetry install` from project root (if pyproject.toml preferred)

### Backend Server Details
- **Framework**: Flask 2.3.3
- **Port**: 5000 (default)
- **Mode**: Debug mode with auto-reload
- **Endpoints**: 
  - `GET /` - Basic status
  - `GET /health` - Health check JSON response

### Development Workflow
1. Make changes to Python files in `backend/`
2. Test with: `cd backend && python3 app.py`
3. Validate endpoints with curl commands above
4. Use automation scripts to verify full setup still works

### Error Handling
- **Python not found**: Ensure Python 3.x is installed
- **Permission denied**: `chmod +x backend/start_backend.sh`
- **Module import errors**: Run `pip3 install -r requirements.txt` or `poetry install`
- **Port 5000 in use**: Stop other Flask apps or change port in app.py
- **Frontend commands fail**: Frontend needs package.json creation first
- **Poetry not found**: Install with `pip install poetry` or use pip workflow instead
- **Import errors with Poetry**: Run `poetry shell` to activate virtual environment
- **Database initialization fails**: Ensure `db_manager.py` exists and is importable
- **Makefile commands fail**: Ensure you're in `backend/` directory

### Files Missing from Documentation
The README references files that don't exist yet:
- `backend/models.py` - Not implemented
- `backend/data_collector.py` - Not implemented  
- `backend/sentiment_analyzer.py` - Not implemented
- `database/schema.sql` - Not implemented

**Files that DO exist but aren't in README.md:**
- `src/App.jsx` - React main component (IMPLEMENTED)
- `src/components/MobileDeployButton.jsx` - Mobile deploy component (IMPLEMENTED)  
- `pyproject.toml` - Poetry configuration (IMPLEMENTED)
- `backend/Makefile` - Build automation (IMPLEMENTED)
- `backend/start_backend.sh` - Shell automation (IMPLEMENTED)

**Files referenced in frontend/README.md but missing:**
- `frontend/App.js` - Not implemented (but `src/App.jsx` exists)
- `frontend/ReputationGraph.js` - Not implemented

### Important Notes
- Server auto-reloads on file changes (Flask debug mode)
- Database operations are currently stubs (create_tables() just prints success)
- No authentication or security implemented
- No actual AI/sentiment analysis functionality yet
- Project is in early development stage

**React Components Available:**
- `src/App.jsx`: Basic React application structure with MobileDeployButton
- `src/components/MobileDeployButton.jsx`: Mobile deployment component with Netlify integration
- These can serve as foundation for frontend development but need package.json setup first

**Poetry Support:**
- `pyproject.toml` configured for Python 3.13+ with gunicorn for production
- Use `poetry install && poetry shell` for isolated development environment
- Compatible with existing pip workflow

### Always Reference These Validated Commands
```bash
# Quick backend test (from repository root)
cd backend && pip3 install -r requirements.txt && python3 app.py

# Quick backend test with Poetry (alternative)
poetry install && cd backend && python3 app.py

# Full automated setup
cd backend && ./start_backend.sh

# Makefile automation
cd backend && make setup

# Health check  
curl http://localhost:5000/health

# Database initialization only
cd backend && python3 -c "import db_manager; db_manager.create_tables()"

# Stop server: Ctrl+C in terminal where server is running
```