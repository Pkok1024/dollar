// index.js
const {app} = require('./server'); // Assuming your server file is named 'server.js'

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
