const express = require('express');
const router = express.Router();
const FormData = require('../model/FormData');

// POST route to save form data
router.post('/submit-form', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            wheels,
            vehicleType,
            model,
            startDate,
            endDate,
        } = req.body;

        // Save form data to the database
        const newFormData = await FormData.create({
            firstName,
            lastName,
            wheels,
            vehicleType,
            model,
            startDate,
            endDate,
        });

        res.status(201).json({
            message: 'Form data saved successfully!',
            data: newFormData,
        });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
