const fs = require('fs');
const path = require('path');

function assembleAndCollect(...filePaths) {
  const assembledData = [];

  const sortedFilePaths = filePaths.sort((a, b) => {
    // Sesuaikan urutan file sesuai keinginan Anda
    const order = {
      'info.json': 1,
      'ai.json': 2,
      'downloader.json': 3,
      'random.json': 4,
//       'search.json': 5,
      'upload.json' :5
    };

    return order[path.basename(a)] - order[path.basename(b)];
  });

  sortedFilePaths.forEach(filePath => {
    try {
      const jsonData = fs.readFileSync(filePath, 'utf8');
      assembledData.push(jsonData);
    } catch (error) {
      console.error(`Error reading JSON file ${filePath}: ${error.message}`);
    }
  });

  return assembledData;
}

const collectedData = assembleAndCollect(
  './src/swaggerUi/info.json',
  './src/swaggerUi/ai.json',
  './src/swaggerUi/downloader.json',
  './src/swaggerUi/random.json',
  './src/swaggerUi/search.json',
//    './src/swaggerUi/search.json ',
    './src/swaggerUi/upload.json'
);

module.exports = collectedData;
