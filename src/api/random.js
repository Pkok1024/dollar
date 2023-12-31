require('../../lib/message');
const express = require( 'express' );
const fs = require( 'fs' );
const request = require( 'request' )
const apiR = express( );
let currentIndex = 0;
__path = process.cwd( );
const author = 'xyla'
const {
    fetchJson,
    getBuffer
} = require('../../lib/function');
/**
 * @swagger
 * tags:
 *   - name: random
 *     description: Endpoints for random content
 */

/**
 * @swagger
 * /api/image/random:
 *   get:
 *     summary: Get random image and video
 *     description: Random image api
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
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
 * /api/image/potatogodzilla:
 *   get:
 *     summary: Get a random image from potatogodzilla.
 *     description: Returns a random image from the potatogodzilla JSON file.
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
 */
apiR.get( '/image/potatogodzilla', async ( req, res, next ) => {
  let data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/potatogodzilla.json' ) );
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
 * /api/image/china:
 *   get:
 *     summary: Get random image and video
 *     description: Random image api
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
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
 * /api/image/indonesia:
 *   get:
 *     summary: Get random image and video
 *     description: Random image api
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
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
 * /api/image/japan:
 *   get:
 *     summary: Get random image and video
 *     description: Random image api
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
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
 * /api/image/korean:
 *   get:
 *     summary: Get random image and video
 *     description: Random image api
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
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
 * /api/image/malaysia:
 *   get:
 *     summary: Get random image and video
 *     description: Random image api
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
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
 * /api/image/thailand:
 *   get:
 *     summary: Get random image and video
 *     description: Random image api
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
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
 * /api/image/vietnam:
 *   get:
 *     summary: Get random image and video
 *     description: Random image api
 *     tags: [random]
 *     produces:
 *       - image/png
 *     responses:
 *       200:
 *         description: Successfully retrieved the random image.
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
