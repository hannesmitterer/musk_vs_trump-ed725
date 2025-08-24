#!/bin/bash

# Local validation script to test CI/CD workflows
# This simulates what GitHub Actions will do

set -e

echo "🔍 Running local CI/CD validation..."
echo "=================================="

# Test backend validation (from ci.yml)
echo "📦 Testing backend validation..."
cd backend
python3 -c "import db_manager; db_manager.create_tables(); print('✅ Backend validation passed')"
chmod +x start_backend.sh
bash -n start_backend.sh
make help > /dev/null
cd ..

# Test frontend validation (from ci.yml)
echo "🌐 Testing frontend validation..."
npm run build > /dev/null
echo "✅ Frontend build validation passed"

# Test project structure (from ci.yml)
echo "📁 Testing project structure validation..."
test -f backend/app.py || (echo "❌ Missing backend/app.py" && exit 1)
test -f backend/db_manager.py || (echo "❌ Missing backend/db_manager.py" && exit 1)
test -f src/App.jsx || (echo "❌ Missing src/App.jsx" && exit 1)
test -f package.json || (echo "❌ Missing package.json" && exit 1)
test -f .github/workflows/deploy-pages.yml || (echo "❌ Missing deploy workflow" && exit 1)
test -f .github/workflows/ci.yml || (echo "❌ Missing CI workflow" && exit 1)
test -f .github/workflows/backend-health.yml || (echo "❌ Missing backend health workflow" && exit 1)
echo "✅ Project structure validation passed"

# Test backend health (from backend-health.yml)
echo "🏥 Testing backend health validation..."
cd backend
pip install -r requirements.txt > /dev/null
bash -n start_backend.sh
make help > /dev/null
make install-deps > /dev/null 2>&1
make init-db > /dev/null 2>&1
python3 -c "import db_manager; db_manager.create_tables()" > /dev/null
cd ..
echo "✅ Backend health validation passed"

# Test workflow YAML syntax
echo "🔧 Testing workflow YAML syntax..."
for workflow in .github/workflows/*.yml; do
    python3 -c "import yaml; yaml.safe_load(open('$workflow'))" || exit 1
done
echo "✅ All workflows have valid YAML syntax"

echo ""
echo "🎉 All CI/CD validations passed!"
echo "=================================="
echo "The following workflows are ready for deployment:"
echo "  - deploy-pages.yml: Complete CI/CD pipeline"
echo "  - ci.yml: Pull request validation"
echo "  - backend-health.yml: Regular health checks"
echo ""
echo "These workflows will provide complete automation for:"
echo "  ✓ React frontend deployment to GitHub Pages"
echo "  ✓ Backend testing and validation"
echo "  ✓ Pull request validation"
echo "  ✓ Daily health monitoring"
echo ""