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
 * /api/random/random:
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
apiR.get( '/random', async ( req, res, next ) => {
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
 * /api/random/potatogodzilla:
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
apiR.get( '/potatogodzilla', async ( req, res, next ) => {
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
 * /api/random/china:
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

apiR.get( '/china', async ( req, res, next ) => {
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
 * /api/random/indonesia:
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

apiR.get( '/indonesia', async ( req, res, next ) => {
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
 * /api/random/japan:
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

apiR.get( '/japan', async ( req, res, next ) => {
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
 * /api/random/korean:
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

apiR.get( '/korean', async ( req, res, next ) => {
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
 * /api/random/malaysia:
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

apiR.get( '/malaysia', async ( req, res, next ) => {
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
 * /api/random/thailand:
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

apiR.get( '/thailand', async ( req, res, next ) => {
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
 * /api/random/vietnam:
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

apiR.get( '/vietnam', async ( req, res, next ) => {
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
