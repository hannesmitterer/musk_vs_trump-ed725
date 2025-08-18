"""
Sample Flask app for musk_vs_trump backend
"""

from flask import Flask
import sys

app = Flask(__name__)

@app.route('/')
def hello():
    return "Musk vs Trump Backend Server is running!"

@app.route('/health')
def health():
    return {"status": "healthy", "message": "Backend server is operational"}

if __name__ == '__main__':
    print("🌐 Musk vs Trump Backend Server starting...")
    print("Server will be available at: http://localhost:5000")
    print("Health check endpoint: http://localhost:5000/health")
    
    try:
        app.run(host='0.0.0.0', port=5000, debug=True)
    except KeyboardInterrupt:
        print("\n👋 Server stopped gracefully")
        sys.exit(0)