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
const scrape = require('../../scrape/index');
/**
 * @swagger
 * tags:
 *   - name: Downloader
 *     description: Endpoints for downloading content
 */

/**
 * @swagger
 * /api/downloader/tiktok:
 *   get:
 *     summary: Download TikTok content
 *     description: Downloads TikTok content using the provided URL.
 *     tags:
 *       - Downloader
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
apiR.get('/tiktok', async (req, res, next) => {
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
 * /api/downloader/mediafire:
 *   get:
 *     summary: Download Mediafire content
 *     description: Downloads Mediafire content using the provided URL.
 *     tags:
 *       - Downloader
 *     parameters:
 *       - in: query
 *         name: url
 *         required: true
 *         description: The URL of the Mediafire content to download.
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
apiR.get( '/mediafire', async ( req, res, next ) => {
  let url = req.query.url
  if ( !url ) return res.json( msg.paramurl )
  scrape.downloader.mediafire( url )
    .then( data => {
      let result = data;
      if ( !result ) res.json( msg.nodata )
      res.json( {
        status: "Success",
        code: 200,
        author: author,
        data: result
      } )
    } )
} )


/**
 * @swagger
 * /api/downloader/sfilemobi:
 *   get:
 *     summary: Download sfilemobi content
 *     description: Downloads sfilemobi content using the provided URL.
 *     tags:
 *       - Downloader
 *     parameters:
 *       - in: query
 *         name: url
 *         required: true
 *         description: The URL of the sfilemobi content to download.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with downloaded sfilemobi content.
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
apiR.get('/sfilemobi', async (req, res, next) => {
  let url = req.query.url
  if (!url) return res.json(msg.paramurl)
    scrape.downloader.sfilemobi(url)
  .then(data => {
    let result = data;
    if (!result) res.json(msg.nodata)
    res.json({
      status: "Success",
      code: 200,
      author: author,
      data: result
    })
  })
})







module.exports = apiR
