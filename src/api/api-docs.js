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
 * components:
 *   schemas:
 *     ImageResponse:
 *       type: bufrer
 *       format: base64
 *
 * /api/image/random:
 *   get:
 *     summary: Get a random image from random.
 *     description: Returns a random image from the China JSON file.
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
 * @swagger
 * components:
 *   schemas:
 *     ImageResponse:
 *       type: bufrer
 *       format: base64
 *
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
/**
 * @swagger
 * tags:
 *   - name: downloader
 *     description: Endpoints for downloading content
 */

/**
 * @swagger
 * /api/downloader/tiktok:
 *   get:
 *     summary: Download TikTok content
 *     description: Downloads TikTok content using the provided URL.
 *     tags:
 *       - downloader
 *     parameters:
 *       - in: query
 *         name: url
 *         required: true
 *         description: The URL of the TikTok content to download.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with downloaded TikTok content.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 code:
 *                   type: integer
 *                 author:
 *                   type: string
 *                 data:
 *                   type: object
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: xyla
 *                 data:
 *                   
 */
apiR.get('/downloader/tiktok', async (req, res, next) => {
  const url = req.query.url;
  if (!url) return res.json(msg.paramurl);
  xorizn = await fetchJson(`https://xorizn-downloads.vercel.app/api/downloads/tiktok?url=${url}`)
    .then(data => {
      let aneh = data.result;
      if (!aneh) return res.json(msg.nodata);
      res.status(200).json({
        status: "Success",
        code: 200,
        author: "Xyla",
        data: aneh
      });
    });
});
/**
 * @swagger
 * tags:
 *   - name: search
 *     description: Endpoints for searching content
 */

/**
 * @swagger
 * /api/ai/bard:
 *   get:
 *     summary: Search for content
 *     description: Searches for content based on the provided query.
 *     tags:
 *       - search
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         description: The search query.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with search results.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 code:
 *                   type: integer
 *                 author:
 *                   type: string
 *                 data:
 *                   type: object
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: xyla
 *                 data:
 */
apiR.get('/ai/bard', async (req, res, next) => {
  const query = req.query.q;
  if (!query) return res.json(msg.paramquery);

  xorizn = await fetchJson(`https://aemt.me/bard?text=${query}`).then(data => {
    let aneh = data.result;
    if (!aneh) return res.json(msg.nodata);
    res.json({
      status: "Success",
      code: 200,
      author: "xyla",
      data: aneh
    });
  });
});

module.exports = apiR
