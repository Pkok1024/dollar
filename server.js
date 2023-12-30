const express = require('express');
const multer = require('multer');
const { uploadFileToDiscord } = require('./dc');
const fs = require('fs');
const request = require('request')
const app = express();
//const port = process.env.PORT || 3000;

const storage = multer.memoryStorage();
//const upload = multer({ storage: storage });
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// Serve API documentation at '/document'
app.get('/document', (req, res) => {
  const apiDocContent = fs.readFileSync('api-doc.html', 'utf8');
  res.send(apiDocContent);
});
app.get('/api/china', async (req, res, next) => {
    const data = [
"https://i.postimg.cc/QdncScPQ/1.jpg",
"https://i.postimg.cc/zv1CK5Q4/10.jpg",
"https://i.postimg.cc/4x3zzW84/11.jpg",
"https://i.postimg.cc/pXCfhwJ1/12.jpg",
"https://i.postimg.cc/brHQRWcr/13.jpg",
"https://i.postimg.cc/zX8wfzKg/14.jpg",
"https://i.postimg.cc/QM91zHGR/15.jpg",
"https://i.postimg.cc/43DVRsXn/16.jpg",
"https://i.postimg.cc/nrkDmmBQ/17.jpg",
"https://i.postimg.cc/CLhDgvpC/18.jpg",
"https://i.postimg.cc/fT8dTxMG/19.jpg",
"https://i.postimg.cc/RFwfMy0d/2.jpg",
"https://i.postimg.cc/nrZmM2jJ/20.jpg",
"https://i.postimg.cc/dVDy7L1L/21.jpg",
"https://i.postimg.cc/kMF8z0zX/22.jpg",
"https://i.postimg.cc/VkTbXmr4/23.jpg",
"https://i.postimg.cc/3wv0BV2h/24.jpg",
"https://i.postimg.cc/V6PrHgFC/25.jpg",
"https://i.postimg.cc/MT0MkBsr/26.jpg",
"https://i.postimg.cc/RhM3v0yC/27.jpg",
"https://i.postimg.cc/D0BS0T3r/28.jpg",
"https://i.postimg.cc/VsRrDj0J/29.jpg",
"https://i.postimg.cc/TY3ySpnC/3.jpg",
"https://i.postimg.cc/NfCywB4Y/30.jpg",
"https://i.postimg.cc/3RZRfTRs/31.jpg",
"https://i.postimg.cc/HnZLH9b3/4.jpg",
"https://i.postimg.cc/rFsmj7LH/5.jpg",
"https://i.postimg.cc/4N03Swfx/6.jpg",
"https://i.postimg.cc/66YqdtFR/7.jpg",
"https://i.postimg.cc/rwtpXWsC/8.jpg",
"https://i.postimg.cc/wB8j6vsK/9.jpg"
]
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
})
app.get('/', (req, res) => {
  const htmlContent = fs.readFileSync('index.html', 'utf8');
  res.send(htmlContent);
});
app.get('/app', (req, res) => {
  const htmlContent = fs.readFileSync('app.html', 'utf8');
  res.send(htmlContent);
});

app.post('/api/upload-to-discord', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }
if (req.file.size > 10 * 1024 * 1024) { 
  return res.status(400).json({ error: 'File size exceeds the 10MB limit.' }); 
}
    const fileBuffer = req.file.buffer;

    const result = await uploadFileToDiscord(fileBuffer);

    // Remove query parameters from the file URL
    const cleanedFileUrl = result.attachments[0].url.replace(/\?.*$/, '');

    const discordResponse = {
      message: 'File uploaded successfully.',
      author: `${result.author.username}`,
      responseCode: 200,
      fileUrl: cleanedFileUrl,
    };

    // Notify with extracted information
    console.log(`Notification:
      ${discordResponse.message}
      ${discordResponse.author}
      Response Code: ${discordResponse.responseCode}
      File URL: ${discordResponse.fileUrl}`);

    res.status(200).json(discordResponse);
  } catch (error) {
    console.error('Error uploading to Discord:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = { app };
//app.listen(port, () => {
//  console.log(`Server is running on port ${port}`);
//})