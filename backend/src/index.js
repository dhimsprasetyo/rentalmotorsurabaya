const express = require('express');
const cors = require('cors');
const motorsData = require('./data/motors.json');
const testimonialsData = require('./data/testimonials.json');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Get all motors
app.get('/api/motors', (req, res) => {
    const { category } = req.query;

    if (category && category !== 'all') {
        const filtered = motorsData.filter(m => m.category === category);
        return res.json(filtered);
    }

    res.json(motorsData);
});

// Get motor by ID
app.get('/api/motors/:id', (req, res) => {
    const motor = motorsData.find(m => m.id === parseInt(req.params.id));

    if (!motor) {
        return res.status(404).json({ error: 'Motor not found' });
    }

    res.json(motor);
});

// Get motors by category
app.get('/api/motors/category/:category', (req, res) => {
    const filtered = motorsData.filter(m => m.category === req.params.category);
    res.json(filtered);
});

// Get all testimonials
app.get('/api/testimonials', (req, res) => {
    res.json(testimonialsData);
});

// Get business info
app.get('/api/info', (req, res) => {
    res.json({
        name: 'Rental Motor Surabaya RMR 2',
        tagline: 'Sewa Motor Surabaya Terpercaya 24 Jam – Unit Terawat & Fast Response',
        address: 'Jl. Kedung Tarukan Wetan No.2B, Mojo, Kec. Gubeng, Surabaya, Jawa Timur 60132',
        whatsapp: ['+62 895-1810-4096', '0838-3093-9338'],
        instagram: '@rentalmotorsurabaya_19',
        tiktok: '@rentalmotorsurabaya_19',
        operatingHours: '24 Jam',
        rating: 4.8,
        reviewCount: 150,
        established: 2017,
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
    console.log(`🚀 RMR2 Backend API running on port ${PORT}`);
});
