const express = require( 'express' );
const multer = require( 'multer' );
const {
  uploadFileToDiscord
} = require( '../../dc.js' );
const fs = require( 'fs' );
const request = require( 'request' )
const apiR = express( );
__path = process.cwd( );
const storage = multer.memoryStorage( );

const upload = multer( {
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024
  } // 10MB limit
} );



apiR.post( '/upload-to-discord', upload.single( 'file' ), async ( req, res ) => {
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
/**
 * @swagger
 * components:
 *   schemas:
 *     ImageResponse:
 *       type: string
 *       format: binary
 *
 * /api/video/random:
 *   get:
 *     summary: Get a random image from China.
 *     description: Returns a random image from the China JSON file.
 *     tags: [random]
 *     produces:
 *       - video/mp4
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
 *         content:
 *           video/mp4:
 *             schema:
 *               $ref: '#/components/schemas/ImageResponse'
 */
apiR.get( '/video/random', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/video/random.json' ) );
  const rv = data[ Math.floor( Math.random( ) * data.length ) ];
  result = await fetch( rv )
    .then( v => v.buffer( ) )
  await fs.writeFileSync( __path + '/tmp/asupan.mp4', result )
  res.sendFile( __path + '/tmp/asupan.mp4' )
} )

/**
 * @swagger
 * components:
 *   schemas:
 *     ImageResponse:
 *       type: string
 *       format: binary
 *
 * /api/image/:
 *   get:
 *     summary: Get a random image from random.
 *     description: Returns a random image from the China JSON file.
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
 *         content:
 *           image/png:
 *             schema:
 *               $ref: '#/components/schemas/ImageResponse'
 */
apiR.get( '/image/random', async ( req, res, next ) => {
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

/**
 * @swagger
 * components:
 *   schemas:
 *     ImageResponse:
 *       type: string
 *       format: binary
 *
 * /api/image/china:
 *   get:
 *     summary: Get a random image from random.
 *     description: Returns a random image from the China JSON file.
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
 *         content:
 *           image/png:
 *             schema:
 *               $ref: '#/components/schemas/ImageResponse'
 */

apiR.get( '/image/china', async ( req, res, next ) => {
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

/**
 * @swagger
 * components:
 *   schemas:
 *     ImageResponse:
 *       type: string
 *       format: binary
 *
 * /api/image/indonesia:
 *   get:
 *     summary: Get a random image from random.
 *     description: Returns a random image from the China JSON file.
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
 *         content:
 *           image/png:
 *             schema:
 *               $ref: '#/components/schemas/ImageResponse'
 */

apiR.get( '/image/indonesia', async ( req, res, next ) => {
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

/**
 * @swagger
 * components:
 *   schemas:
 *     ImageResponse:
 *       type: string
 *       format: binary
 *
 * /api/image/japan:
 *   get:
 *     summary: Get a random image from random.
 *     description: Returns a random image from the China JSON file.
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
 *         content:
 *           image/png:
 *             schema:
 *               $ref: '#/components/schemas/ImageResponse'
 */

apiR.get( '/image/japan', async ( req, res, next ) => {
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

/**
 * @swagger
 * components:
 *   schemas:
 *     ImageResponse:
 *       type: string
 *       format: binary
 *
 * /api/image/korean:
 *   get:
 *     summary: Get a random image from random.
 *     description: Returns a random image from the China JSON file.
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
 *         content:
 *           image/png:
 *             schema:
 *               $ref: '#/components/schemas/ImageResponse'
 */

apiR.get( '/image/korean', async ( req, res, next ) => {
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

/**
 * @swagger
 * components:
 *   schemas:
 *     ImageResponse:
 *       type: string
 *       format: binary
 *
 * /api/image/malaysia:
 *   get:
 *     summary: Get a random image from random.
 *     description: Returns a random image from the China JSON file.
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
 *         content:
 *           image/png:
 *             schema:
 *               $ref: '#/components/schemas/ImageResponse'
 */

apiR.get( '/image/malaysia', async ( req, res, next ) => {
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

/**
 * @swagger
 * components:
 *   schemas:
 *     ImageResponse:
 *       type: string
 *       format: binary
 *
 * /api/image/thailand:
 *   get:
 *     summary: Get a random image from random.
 *     description: Returns a random image from the China JSON file.
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
 *         content:
 *           image/png:
 *             schema:
 *               $ref: '#/components/schemas/ImageResponse'
 */

apiR.get( '/image/thailand', async ( req, res, next ) => {
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

/**
 * @swagger
 * components:
 *   schemas:
 *     ImageResponse:
 *       type: string
 *       format: binary
 *
 * /api/image/vietnam:
 *   get:
 *     summary: Get a random image from random.
 *     description: Returns a random image from the China JSON file.
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
 *         content:
 *           image/png:
 *             schema:
 *               $ref: '#/components/schemas/ImageResponse'
 */

apiR.get( '/image/vietnam', async ( req, res, next ) => {
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
module.exports = apiR
//app.listen(port, () => {
//  console.log(`Server is running on port ${port}`);
//})
