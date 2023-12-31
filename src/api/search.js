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
 *   - name: search
 *     description: Endpoints for downloading content
 */

/**
 * @swagger
 * /api/search/youtube:
 *   get:
 *     summary: search youtube content
 *     description: search youtube content using the provided query.
 *     tags:
 *       - search
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         description: The query of the youtube content to search.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with downloaded youtube content.
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
apiR.get('/youtube', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    scrape.search.youtube(query)
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

/**
 * @swagger
 * /api/search/xnxx:
 *   get:
 *     summary: search xnxx content
 *     description: Searches xnxx content using the provided query.
 *     tags:
 *       - search 
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         description: The URL of the TikTok xnxx to search.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with search xnxx content.
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
apiR.get('/xnxx', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    scrape.downloader.download.xnxxSearch(query)
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
