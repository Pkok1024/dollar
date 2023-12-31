const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const bodyParser = require('body-parser');
const fs = require('fs')
const favicon = require('serve-favicon');
const path = require('path');
const compression = require('compression');
const cookieParser = require('cookie-parser');
secure = require('ssl-express-www');
const helloRouter = require('./src/hallo.js')
// Import the router from the hello.js file
const apiR = require('./src/api/api-docs.js');

dotenv.config();

const app = express();

app.use(bodyParser.json()); // to use body object in requests

// Your existing middleware setup (morgan, cors, etc.)
app.use(morgan('dev'));
app.use(cors());
app.set('trust proxy', 1);
app.use(compression());
app.use(favicon(path.join(__dirname,'assets','image','1.png')))
app.enable('trust proxy');
app.set("json spaces",2)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// Swagger setup
const CSS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '.M.U.F.A.R. APIs',
      version: '0.6.9',
      description: 'Based',
      contact: {
        name: 'Contact',
        url: 'https://wa.me/message/DS7NCZ4OLTYZK1',
        email: 'onlasdan@gmail.com',
      },
    },
    servers: [
      {
        url: 'https://dollar.bivat22407.repl.co',
        description: 'My API Server',
      },{
        url: 'https://api-mufar.cyclic.app',
        description: 'My API Server',
      }
    ],
  },
  apis: ['src/**/*.js'],
};

const specs = swaggerJsDoc(options);

// Swagger UI endpoint
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs, { customCssUrl: CSS_URL }));

/*// Your existing route setup
app.get( '/', ( req, res ) => {
  const htmlContent = fs.readFileSync( 'index.html', 'utf8' );
  res.send( htmlContent );
} );*/
app.use('/', helloRouter)
app.use('/api', apiR);

// Start the server
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
