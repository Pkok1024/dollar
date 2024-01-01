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

apiR.get('/bard', async (req, res, next) => {
  const query = req.query.q;
  if (!query) return res.json(msg.paramquery);
const decodedQuery = decodeURIComponent(query).replace(/ /g, '-'); 

  xorizn = await fetchJson(`https://aemt.me/bard?text=${decodedQuery}`).then(data => {
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