const express = require('express');
const router = express.Router();
const SWP = require('../models/SWP');

// Create SWP
router.post('/', async (req, res) => {
  try {
    const swp = new SWP(req.body);
    await swp.save();
    res.status(201).send(swp);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all SWPs
router.get('/', async (req, res) => {
  try {
    const swps = await SWP.find();
    res.status(200).send(swps);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get SWP by ID
router.get('/:id', async (req, res) => {
  try {
    const swp = await SWP.findById(req.params.id);
    if (!swp) {
      return res.status(404).send('SWP not found');
    }
    res.status(200).send(swp);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update SWP by ID
router.put('/:id', async (req, res) => {
  try {
    const swp = await SWP.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!swp) {
      return res.status(404).send('SWP not found');
    }
    res.status(200).send(swp);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete SWP by ID
router.delete('/:id', async (req, res) => {
  try {
    const swp = await SWP.findByIdAndDelete(req.params.id);
    if (!swp) {
      return res.status(404).send('SWP not found');
    }
    res.status(200).send('SWP deleted');
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
