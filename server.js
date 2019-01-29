const express = require('express');
const fs = require('fs');
const path = require('path');
const devServer = require('./build/dev-server');

const app = express();

const entryHtml = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');

app.use('dist', express.static(path.resolve(__dirname, './dist')));

devServer(app);

app.get('*', (req, res) => {
  res.write(entryHtml);
  res.end();
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started at localhost:${port}`);
});
