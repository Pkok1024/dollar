const express = require( 'express' );
const cors = require( 'cors' );
const morgan = require( 'morgan' );
const dotenv = require( 'dotenv' );
const swaggerUI = require( 'swagger-ui-express' );
const swaggerJsDoc = require( 'swagger-jsdoc' );
const bodyParser = require( 'body-parser' );
const fs = require( 'fs' )
const favicon = require( 'serve-favicon' );
const path = require( 'path' );
const compression = require( 'compression' );
const cookieParser = require( 'cookie-parser' );
const {
  SwaggerTheme
} = require( 'swagger-themes' );
const helloRouter = require( './src/hallo' )
// Import the router from the hello.js file
const apiR = require( './src/api/router' );
dotenv.config( );
const app = express( );
app.use( bodyParser.json( ) ); // to use body object in requests
// Your existing middleware setup (morgan, cors, etc.)
app.use( morgan( 'dev' ) );
app.use( cors( ) );
app.set( 'trust proxy', 1 );
app.use( compression( ) );
app.use( favicon( path.join( __dirname, 'assets', 'image', '1.png' ) ) )
app.use( '/assets', express.static( path.join( __dirname, 'assets' ) ) );
app.enable( 'trust proxy' );
app.set( "json spaces", 2 )
app.use( express.urlencoded( {
  extended: true
} ) );
app.use( express.json( ) );
app.use( cookieParser( ) );
// Swagger setup
const options = {
  definition: {
    info: {
      title: '.M.U.F.A.R.',
      version: '0.6.9',
      description: 'Deskripsi API Anda',
    },
    basePath: '/',
  },
  apis: [ path.resolve( __dirname, './swagger.yaml' ) ],
};


// Menggunakan Swagger UI untuk menampilkan dokumentasi OpenAPI
app.use( '/docsc', swaggerUI.serve, swaggerUI.setup( options ) );


//app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs,options2 ));
const specs = swaggerJsDoc( options );


// Swagger UI endpoint
const theme = new SwaggerTheme( 'v3' );
const options2 = {
  explorer: true,
  customCss: `
    ${theme.getBuffer('monokai')}
    .swagger-ui {
      background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('https://telegra.ph/file/91fb54d65a22f5b406da8.jpg') no-repeat center center fixed;
      background-size: cover;
    }
  `,
  customFavicon: 'https://telegra.ph/file/5d77cbecfa85661dfd9c7.jpg'
};
app.use( '/docs', swaggerUI.serve, swaggerUI.setup( specs, options2 ) );
app.use( '/', helloRouter )
app.use( '/api', apiR );


// Start the server
const port = process.env.PORT || 3002;
app.listen( port, ( ) => {
  console.log( `Server is running on port ${port}` );
} );
