require('../../lib/message');
const express = require( 'express' );
const fs = require( 'fs' );
const request = require( 'request' )
const apiR = express( );
let currentIndex = 0;
__path = process.cwd( );
const author = 'xyla'
const scrape = require('../../scrape/index');
const {
    fetchJson,
    getBuffer
} = require('../../lib/function');

/**
 * @swagger
 * tags:
 *   - name: Ai
 *     description: Endpoints for searching content
 */

/**
 * @swagger
 * /api/ai/bard:
 *   get:
 *     summary: bard ai api
 *     description: communication with bard ai
 *     tags:
 *       - Ai
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
apiR.get('/bard', async (req, res, next) => {
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
/**
 * @swagger
 * /api/ai/bingimage:
 *   get:
 *     summary: bing creator api
 *     description: communication with bing
 *     tags:
 *       - Ai
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
 *                 author: iky
 *                 data:
 */
apiR.get('/bingimage', async (req, res, next) => {
  const query = req.query.q;
  if (!query) return res.json(msg.paramquery);

  xorizn = await fetchJson(`https://aemt.me/bingimg?text=${query}`).then(data => {
    let aneh = data.result;
    if (!aneh) return res.json(msg.nodata);
    res.json({
      status: "Success",
      code: 200,
      author: "iky",
      data: aneh
    });
  });
});
/**
 * @swagger
 * /api/ai/deepenglish:
 *   get:
 *     summary: deepenglish ai api
 *     description: communication with ai
 *     tags:
 *       - Ai
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
 *                 author: iky
 *                 data:
 */
apiR.get('/deepenglish', async (req, res, next) => {
  const query = req.query.q
  if (!query) return res.json(msg.paramquery)

    scrape.others.deepenglish(query)
  .then(data => {
    let anu = data
    if (!anu) res.json(msg.nodata)
    res.json({
      status: "Success",
      code: 200,
      author: "iky",
      data: anu
    })
  })
})
/**
 * @swagger
 * /api/ai/azure:
 *   get:
 *     summary: azure ai api
 *     description: communication with bard ai
 *     tags:
 *       - Ai
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
 *                 author: iky
 *                 data:
 */
apiR.get('/azure', async (req, res, next) => {
  const query = req.query.q
  if (!query) return res.json(msg.paramquery)

    scrape.others.azure(query)
  .then(data => {
    let anu = data
    if (!anu) res.json(msg.nodata)
    res.json({
      status: "Success",
      code: 200,
      author: "iky",
      data: anu
    })
  })
})
/**
 * @swagger
 * /api/ai/gptonline:
 *   get:
 *     summary: gpt api
 *     description: communication with gpt
 *     tags:
 *       - Ai
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
 *                 author: iky
 *                 data:
 */
apiR.get('/gptonline', async (req, res, next) => {
  const query = req.query.q
  if (!query) return res.json(msg.paramquery)

    scrape.others.gptonline(query)
  .then(data => {
    let anu = data
    if (!anu) res.json(msg.nodata)
    res.json({
      status: "Success",
      code: 200,
      author: "iky",
      data: anu
    })
  })
})

module.exports = apiR