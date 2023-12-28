const express = require('express');
const multer = require('multer');
const { uploadFileToDiscord } = require('./dc');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve API documentation at '/document'
app.get('/document', (req, res) => {
  const apiDocContent = fs.readFileSync('api-doc.html', 'utf8');
  res.send(apiDocContent);
});

app.get('/', (req, res) => {
  const htmlContent = fs.readFileSync('index.html', 'utf8');
  res.send(htmlContent);
});

app.post('/api/upload-to-discord', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
