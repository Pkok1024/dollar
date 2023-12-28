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

  // Add your Discord API endpoint and headers
  const discordEndpoint = 'https://discord.com/api/v9/channels/1180682772487098549/messages';
  const headers = {
    Authorization: 'Bot MTE4OTgyNDg2MTA5NTM0NjE5Nw.GnCaib.A-YEXExqYBWT0nmshpc1of_M6ulbbYN-BFEYn8',
  };

  // request discord
  const response = await fetch(discordEndpoint, {
    method: 'POST',
    headers: { ...headers, ...formData.getHeaders() },
    body: formData,
  }).then((res) => res.json());

  return response;
}

module.exports = { uploadFileToDiscord };
