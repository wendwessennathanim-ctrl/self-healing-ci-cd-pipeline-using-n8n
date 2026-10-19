const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Sample test
if (require.main === module) {
  console.log('Running tests');
} else {
  console.error('This script should be run directly for tests');
}
