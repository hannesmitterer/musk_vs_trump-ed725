#!/bin/bash

# Demo script showing how to connect GitHub Pages dashboard to the backend
# This script can be used to test the integration once real APIs are implemented

echo "🚀 Musk vs Trump - Backend Integration Demo"
echo "=========================================="

# Step 1: Start the backend server
echo "1. Starting Flask backend server..."
cd backend
pip3 install -r requirements.txt
python3 -c "import db_manager; db_manager.create_tables()"

# Start backend in background
python3 app.py &
BACKEND_PID=$!
echo "✅ Backend started with PID: $BACKEND_PID"

# Step 2: Test backend endpoints
echo ""
echo "2. Testing backend endpoints..."
sleep 3
echo "Testing / endpoint:"
curl -s http://localhost:5000/
echo ""
echo "Testing /health endpoint:"
curl -s http://localhost:5000/health | python3 -m json.tool
echo ""

# Step 3: Serve GitHub Pages locally
echo ""
echo "3. Starting GitHub Pages dashboard..."
cd ../docs
python3 -m http.server 8080 &
PAGES_PID=$!
echo "✅ GitHub Pages served at http://localhost:8080"

echo ""
echo "🎯 Demo URLs:"
echo "  - Backend API: http://localhost:5000"
echo "  - GitHub Pages: http://localhost:8080"
echo ""
echo "📝 Future Integration Steps:"
echo "  1. Add /api/reputation endpoint to backend"
echo "  2. Update docs/app.js to fetch from backend instead of mock data"
echo "  3. Implement real sentiment analysis in backend"
echo "  4. Add CORS headers for cross-origin requests"
echo ""
echo "Press Ctrl+C to stop both servers..."

# Wait for user interrupt
trap "echo ''; echo 'Stopping servers...'; kill $BACKEND_PID $PAGES_PID 2>/dev/null; exit 0" INT
wait