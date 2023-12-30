const express = require( 'express' );
const multer = require( 'multer' );
const {
  uploadFileToDiscord
} = require( './dc' );
const fs = require( 'fs' );
const request = require( 'request' )
const app = express( );
//const port = process.env.PORT || 3000;
__path = process.cwd( );
const storage = multer.memoryStorage( );
//const upload = multer({ storage: storage });
const upload = multer( {
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024
  } // 10MB limit
} );
// Serve API documentation at '/document'
app.get( '/document', ( req, res ) => {
  const apiDocContent = fs.readFileSync( 'api-doc.html', 'utf8' );
  res.send( apiDocContent );
} );
app.get( '/api/china', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/china.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )
app.get( '/', ( req, res ) => {
  const htmlContent = fs.readFileSync( 'index.html', 'utf8' );
  res.send( htmlContent );
} );
app.get( '/app', ( req, res ) => {
  const htmlContent = fs.readFileSync( 'app.html', 'utf8' );
  res.send( htmlContent );
} );
app.post( '/api/upload-to-discord', upload.single( 'file' ), async ( req, res ) => {
  try {
    if ( !req.file ) {
      return res.status( 400 )
        .json( {
          error: 'No file uploaded.'
        } );
    }
    if ( req.file.size > 10 * 1024 * 1024 ) {
      return res.status( 400 )
        .json( {
          error: 'File size exceeds the 10MB limit.'
        } );
    }
    const fileBuffer = req.file.buffer;
    const result = await uploadFileToDiscord( fileBuffer );
    // Remove query parameters from the file URL
    const cleanedFileUrl = result.attachments[ 0 ].url.replace( /\?.*$/, '' );
    const discordResponse = {
      message: 'File uploaded successfully.',
      author: `${result.author.username}`,
      responseCode: 200,
      fileUrl: cleanedFileUrl,
    };
    // Notify with extracted information
    console.log( `Notification:
      ${discordResponse.message}
      ${discordResponse.author}
      Response Code: ${discordResponse.responseCode}
      File URL: ${discordResponse.fileUrl}` );
    res.status( 200 )
      .json( discordResponse );
  }
  catch ( error ) {
    console.error( 'Error uploading to Discord:', error );
    res.status( 500 )
      .json( {
        error: 'Internal Server Error'
      } );
  }
} );
app.get( '/api/video/random', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/video/random.json' ) );
  const rv = data[ Math.floor( Math.random( ) * data.length ) ];
  result = await fetch( rv )
    .then( v => v.buffer( ) )
  await fs.writeFileSync( __path + '/tmp/asupan.mp4', result )
  res.sendFile( __path + '/tmp/asupan.mp4' )
} )
app.get( '/api/image/random', async ( req, res, next ) => {
  let data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/random.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )
app.get( '/api/image/china', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/china.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )
app.get( '/api/image/indonesia', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/indonesia.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )
app.get( '/api/image/japan', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/japan.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )
app.get( '/api/image/korean', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/korean.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )
app.get( '/api/image/malaysia', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/malaysia.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )
app.get( '/api/image/thailand', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/thailand.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )
app.get( '/api/image/vietnam', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/vietnam.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )
module.exports = {
  app
};
//app.listen(port, () => {
//  console.log(`Server is running on port ${port}`);
//})
