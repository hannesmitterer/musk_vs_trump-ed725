#!/bin/bash

# Backend Server Automation Script for musk_vs_trump project
# This script automates the setup and startup of the backend server

set -e  # Exit on any error

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$SCRIPT_DIR"

echo "🚀 Starting backend server setup..."
echo "Working directory: $BACKEND_DIR"

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if Python is installed
if ! command_exists python3; then
    if ! command_exists python; then
        echo "❌ Error: Python is not installed. Please install Python 3.x first."
        exit 1
    else
        PYTHON_CMD="python"
    fi
else
    PYTHON_CMD="python3"
fi

echo "✅ Using Python command: $PYTHON_CMD"

# Step 1: Install Python dependencies from requirements.txt
if [ -f "$BACKEND_DIR/requirements.txt" ]; then
    echo "📦 Installing Python dependencies from requirements.txt..."
    
    # Check if pip is available
    if ! command_exists pip3 && ! command_exists pip; then
        echo "❌ Error: pip is not installed. Please install pip first."
        exit 1
    fi
    
    # Use pip3 if available, otherwise use pip
    if command_exists pip3; then
        PIP_CMD="pip3"
    else
        PIP_CMD="pip"
    fi
    
    $PIP_CMD install -r "$BACKEND_DIR/requirements.txt"
    echo "✅ Dependencies installed successfully!"
else
    echo "⚠️  Warning: requirements.txt not found in $BACKEND_DIR"
    echo "   Skipping dependency installation."
fi

# Step 2: Initialize the database using db_manager.create_tables()
if [ -f "$BACKEND_DIR/db_manager.py" ]; then
    echo "🗄️  Initializing database..."
    cd "$BACKEND_DIR"
    
    # Run database initialization
    $PYTHON_CMD -c "
import sys
sys.path.append('.')
try:
    import db_manager
    if hasattr(db_manager, 'create_tables'):
        db_manager.create_tables()
        print('✅ Database initialized successfully!')
    else:
        print('⚠️  Warning: create_tables function not found in db_manager.py')
except ImportError:
    print('❌ Error: Could not import db_manager module')
    sys.exit(1)
except Exception as e:
    print(f'❌ Error initializing database: {e}')
    sys.exit(1)
"
else
    echo "⚠️  Warning: db_manager.py not found in $BACKEND_DIR"
    echo "   Skipping database initialization."
fi

# Step 3: Start the backend server (python app.py)
if [ -f "$BACKEND_DIR/app.py" ]; then
    echo "🌐 Starting backend server..."
    cd "$BACKEND_DIR"
    
    echo "Server starting at: $(date)"
    echo "Press Ctrl+C to stop the server"
    echo "----------------------------------------"
    
    # Start the server
    $PYTHON_CMD app.py
else
    echo "❌ Error: app.py not found in $BACKEND_DIR"
    echo "   Cannot start the backend server."
    exit 1
fi