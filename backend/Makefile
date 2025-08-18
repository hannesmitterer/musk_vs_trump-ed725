# Makefile for musk_vs_trump backend automation
# Alternative to start_backend.sh script

.PHONY: all install-deps init-db start-server setup clean help

# Default Python command
PYTHON := python3
PIP := pip3

# Check if Python 3 is available, fallback to python
ifeq ($(shell command -v python3 2> /dev/null),)
    PYTHON := python
    PIP := pip
endif

all: setup start-server

help:
	@echo "🚀 Musk vs Trump Backend Automation"
	@echo ""
	@echo "Available targets:"
	@echo "  setup         - Install dependencies and initialize database"
	@echo "  install-deps  - Install Python dependencies from requirements.txt"
	@echo "  init-db       - Initialize database using db_manager.create_tables()"
	@echo "  start-server  - Start the backend server (python app.py)"
	@echo "  clean         - Clean up temporary files"
	@echo "  help          - Show this help message"
	@echo ""
	@echo "Usage examples:"
	@echo "  make setup    # Complete setup and start server"
	@echo "  make help     # Show this help"

setup: install-deps init-db
	@echo "✅ Backend setup completed successfully!"

install-deps:
	@echo "📦 Installing Python dependencies..."
	@if [ -f "requirements.txt" ]; then \
		$(PIP) install -r requirements.txt; \
		echo "✅ Dependencies installed successfully!"; \
	else \
		echo "⚠️  Warning: requirements.txt not found, skipping dependency installation."; \
	fi

init-db:
	@echo "🗄️  Initializing database..."
	@if [ -f "db_manager.py" ]; then \
		$(PYTHON) -c "import db_manager; db_manager.create_tables(); print('✅ Database initialized successfully!')"; \
	else \
		echo "⚠️  Warning: db_manager.py not found, skipping database initialization."; \
	fi

start-server:
	@echo "🌐 Starting backend server..."
	@if [ -f "app.py" ]; then \
		echo "Server starting at: $$(date)"; \
		echo "Press Ctrl+C to stop the server"; \
		echo "----------------------------------------"; \
		$(PYTHON) app.py; \
	else \
		echo "❌ Error: app.py not found, cannot start the backend server."; \
		exit 1; \
	fi

clean:
	@echo "🧹 Cleaning up..."
	@find . -type f -name "*.pyc" -delete
	@find . -type d -name "__pycache__" -delete
	@echo "✅ Cleanup completed!"