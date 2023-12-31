require('../../lib/message');
const express = require( 'express' );
const fs = require( 'fs' );
const request = require( 'request' )
const apiR = express( );
__path = process.cwd( );
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const sendFile = require('../../scrape/src/uploader/dicord.js')
const author = 'xyla'
const {
    fetchJson,
    getBuffer
} = require('../../lib/function');
const {fromBuffer} = require('file-type'); // Import file-type module 
const path = require('path'); 



/**
 * @swagger
 * tags:
 *   name: Uploader
 *   description: File upload related operations
 */

/**
 * @swagger
 * /api/upload/cdn:
 *   post:
 *     summary: Upload a file to Discord
 *     tags: [Uploader]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *                 result:
 *                   type: object
 *                   description: Result from Discord upload
 *       400:
 *         description: No file uploaded or file size exceeds the limit
 */

apiR.post('/cdn', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    const fileBuffer = req.file.buffer;
    const ext = path.extname(req.file.originalname);
    const result = await sendFile(fileBuffer, ext);
   
    res.json({
      status: 'Success',
      code: 200,
      author: author, // Assuming author is defined somewhere in your code
      data: result,
    });
  } catch (error) {
    console.error("Error processing file upload:", error);

    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An error occurred while processing the file upload.',
    });
  }
});



module.exports = apiR
