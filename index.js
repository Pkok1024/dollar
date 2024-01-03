const express = require( 'express' );
const cors = require( 'cors' );
const morgan = require( 'morgan' );
const dotenv = require( 'dotenv' );
const bodyParser = require( 'body-parser' );
const fs = require( 'fs' )
const favicon = require( 'serve-favicon' );
const path = require( 'path' );
const helloRouter = require( './src/hallo' )
// Your existing middleware setup (morgan, cors, etc)

const apiR = require( './src/api/router' );
dotenv.config( );
const app = express( );
app.use( bodyParser.json( ) ); // to use body object in requests
app.set( 'trust proxy', 1 );
app.use( favicon( path.join( __dirname, 'assets', 'image', '1.png' ) ) )
app.use( '/assets', express.static( path.join( __dirname, 'assets' ) ) );
app.set( "json spaces", 2 )
app.use( express.urlencoded( { extended: true } ) );
app.use( express.json( ) );
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