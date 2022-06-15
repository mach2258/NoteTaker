const express = require('express')
const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const db = require('./db/db.json')

const app = express()

const PORT = process.env.PORT || 8080
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));