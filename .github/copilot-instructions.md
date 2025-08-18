# Musk vs Trump AI Reputation Tracker - Development Guide

**ALWAYS follow these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the information here.**

This project is a Python Flask backend with a planned JavaScript frontend for tracking and analyzing public figure reputations through AI-powered sentiment analysis.

## Project Status
- ✅ Backend: Fully functional Flask server with automation
- ⚠️ Frontend: Documented but not yet implemented (only README exists)
- ❌ Testing: No testing infrastructure exists yet
- ❌ Linting: No linting configuration exists yet

## Working Effectively

### Bootstrap and Build the Repository
```bash
# Repository setup (from root directory)
cd backend
pip3 install -r requirements.txt  # Takes <2 seconds
python3 -c "import db_manager; db_manager.create_tables()"  # Takes <1 second
```

### Backend Development
The backend has two validated automation options:

#### Option 1: Shell Script (Recommended)
```bash
cd backend
./start_backend.sh  # Complete setup and server start - Takes <5 seconds total
```

#### Option 2: Makefile
```bash
cd backend
make help           # Show available commands
make setup          # Install deps and init database - Takes <3 seconds
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
**IMPORTANT**: Frontend is documented but NOT implemented yet.
- Only `frontend/README.md` exists
- No `package.json`, no JavaScript files, no HTML files
- Do not attempt `npm install` or `npm start` - these will fail
- If implementing frontend, you must create the files first

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
- `pip3 install -r requirements.txt`: <2 seconds
- Database initialization: <1 second
- Server startup: <2 seconds
- Total setup time: <5 seconds

## Common Tasks and Known Working Commands

### Repository Structure
```
/home/runner/work/musk_vs_trump/musk_vs_trump/
├── backend/
│   ├── app.py                 # Flask server (IMPLEMENTED)
│   ├── db_manager.py          # Database utilities (IMPLEMENTED)
│   ├── requirements.txt       # Python dependencies (IMPLEMENTED)  
│   ├── start_backend.sh       # Automation script (IMPLEMENTED)
│   └── Makefile              # Build automation (IMPLEMENTED)
├── frontend/
│   └── README.md             # Frontend docs (IMPLEMENTATION MISSING)
├── README.md                 # Project documentation
└── info-project.txt          # Project structure reference
```

### Key Files Content

#### backend/requirements.txt
```
# Sample requirements for the musk_vs_trump backend
flask==2.3.3
requests==2.31.0
```

#### Prerequisites
- Python 3.x (tested with 3.12.3)
- pip (Python package manager)
- Node.js and npm (available but frontend not implemented)

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
- **Module import errors**: Run `pip3 install -r requirements.txt`
- **Port 5000 in use**: Stop other Flask apps or change port in app.py
- **Frontend commands fail**: Frontend is not implemented yet - this is expected

### Files Missing from Documentation
The README references files that don't exist yet:
- `backend/models.py` - Not implemented
- `backend/data_collector.py` - Not implemented  
- `backend/sentiment_analyzer.py` - Not implemented
- `database/schema.sql` - Not implemented
- `frontend/App.js` - Not implemented
- `frontend/ReputationGraph.js` - Not implemented

### Important Notes
- Server auto-reloads on file changes (Flask debug mode)
- Database operations are currently stubs (create_tables() just prints success)
- No authentication or security implemented
- No actual AI/sentiment analysis functionality yet
- Project is in early development stage

### Always Reference These Validated Commands
```bash
# Quick backend test (from repository root)
cd backend && pip3 install -r requirements.txt && python3 app.py

# Full automated setup
cd backend && ./start_backend.sh

# Health check  
curl http://localhost:5000/health

# Stop server: Ctrl+C in terminal where server is running
```