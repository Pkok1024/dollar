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
const swaggerJSDoc = require( 'swagger-jsdoc' );
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
// const options = {
//     url: "./swagger.json",
//   docExpansion: "full",
//   displayRequestDuration: true,
// customFavicon: 'https://telegra.ph/file/5d77cbecfa85661dfd9c7.jpg',
//   definition: {
//     info: {
//       title: '.M.U.F.A.R.',
//       version: '0.6.9',
//       description: 'Deskripsi API Anda',
//     },
//     basePath: '/',
//   },
//   apis: [ path.resolve( __dirname, './swagger.yaml' ) ],
// };
const options2 = require('./config.js')

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./options.js');
// const specs = swaggerJsDoc( options );

app.use('/docs', swaggerUi.serve, swaggerUi.setup(require('./swagger.json'),
options2));
swaggerDoc(app);

// Swagger UI endpoint
// app.use( '/docs', swaggerUI.serve, swaggerUI.setup( specs, options2 ) );
app.use( '/', helloRouter )
app.use( '/api', apiR );


app.get('/ip', (request, res) => {
 const ip = request.headers['cf-connecting-ip'] || request.headers['x-real-ip'] ||
  request.headers['x-forwarded-for'] || request.socket.remoteAddress || '';
  console.log (ip)
  return res.send({ip})
});
// Start the server
const port = process.env.PORT || 3002;
app.listen( port, ( ) => {
  console.log( `Server is running on port ${port}` );
} );
