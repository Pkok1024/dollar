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
module.exports = apiR
