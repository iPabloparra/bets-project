/*jshint esversion: 6*/
const express = require('express');
const controller = require('./odd.controller');
const oddRoutes = express.Router();

oddRoutes.get('/', controller.getOdds);
oddRoutes.post('/', controller.createOdd);

module.exports = oddRoutes;
