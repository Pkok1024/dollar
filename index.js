const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const bodyParser = require('body-parser');
const fs = require('fs')
// Import the router from the hello.js file
const apiR = require('./src/api/api-docs.js');

dotenv.config();

const app = express();

app.use(bodyParser.json()); // to use body object in requests

// Your existing middleware setup (morgan, cors, etc.)
app.use(morgan('dev'));
app.use(cors());

// Swagger setup
const CSS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
      description: 'A simple Express Library API',
      termsOfService: 'http://example.com/terms/',
      contact: {
        name: 'API Support',
        url: 'http://www.example.com/support',
        email: 'support@example.com',
      },
    },
    servers: [
      {
        url: 'https://api-mufar.cyclic.app,
        description: 'My API Documentation',
      },
    ],
  },
  apis: ['src/api/*.js'],
};

const specs = swaggerJsDoc(options);

// Swagger UI endpoint
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs, { customCssUrl: CSS_URL }));

// Your existing route setup
app.get( '/', ( req, res ) => {
  const htmlContent = fs.readFileSync( 'index.html', 'utf8' );
  res.send( htmlContent );
} );
app.use('/api', apiR);

// Start the server
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
