const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

describe('Basic Tests', () => {
    it('should respond with Hello World!', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', /text/)
            .expect(200, 'Hello World!', done);
    });
});