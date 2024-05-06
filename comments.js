// Create web server
// npm install express body-parser
// npm install nodemon
// npm install morgan
// npm install cors
// npm install axios
// npm install redis
// npm install dotenv
// npm install express-validator
// npm install express-async-errors
// npm install mongoose
// npm install @sentry/node
// npm install @sentry/tracing
// npm install @sentry/integrations
// npm install @sentry/apm
// npm install nodemailer
// npm install nodemailer-smtp-transport
// npm install nodemailer-sendgrid-transport
// npm install moment

// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');
const redis = require('redis');
const dotenv = require('dotenv');
const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const moment = require('moment');

// Load environment variables
dotenv.config();

// Create express app
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// Connect to Redis
const redisClient = redis.createClient(process.env.REDIS_URL);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define a schema
const Comment = mongoose.model('Comment', {});