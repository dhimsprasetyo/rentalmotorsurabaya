#!/bin/bash

# ===========================================
# Self-Hosting Deployment Script
# Rental Motor Surabaya RMR 2
# ===========================================

set -e

echo "🏍️ Rental Motor Surabaya - Deployment Script"
echo "=============================================="

# Configuration
REPO="ghcr.io/dhimsprasetyo/rentalmotorsurabaya"
DOMAIN="${DOMAIN:-localhost}"

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Login to GitHub Container Registry
echo ""
echo "📦 Logging in to GitHub Container Registry..."
echo "   You'll need a GitHub Personal Access Token with 'read:packages' scope"
echo "   Generate one at: https://github.com/settings/tokens"
echo ""

if [ -z "$GITHUB_TOKEN" ]; then
    read -sp "Enter your GitHub Personal Access Token: " GITHUB_TOKEN
    echo ""
fi

echo $GITHUB_TOKEN | docker login ghcr.io -u dhimsprasetyo --password-stdin

# Pull latest images
echo ""
echo "⬇️ Pulling latest Docker images..."
docker pull $REPO/frontend:latest
docker pull $REPO/backend:latest

# Stop existing containers
echo ""
echo "🛑 Stopping existing containers..."
docker-compose -f docker-compose.prod.yml down || true

# Start services
echo ""
echo "🚀 Starting services..."
docker-compose -f docker-compose.prod.yml up -d

# Health check
echo ""
echo "🔍 Waiting for services to be healthy..."
sleep 10

# Check if services are running
if docker ps | grep -q rmr2_frontend && docker ps | grep -q rmr2_backend; then
    echo ""
    echo "✅ Deployment successful!"
    echo ""
    echo "🌐 Website is now available at:"
    echo "   http://$DOMAIN"
    echo ""
    echo "📊 View logs with:"
    echo "   docker-compose -f docker-compose.prod.yml logs -f"
    echo ""
else
    echo ""
    echo "❌ Deployment may have issues. Check logs with:"
    echo "   docker-compose -f docker-compose.prod.yml logs"
    exit 1
fi
