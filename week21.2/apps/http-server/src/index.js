import express from 'express';
const app = express();
app.get('/signup', (req, res) => {
    res.send('Signed Up');
});
app.get('/signin', (req, res) => {
    res.send('Signed In');
});
app.get('/chat', (req, res) => {
    res.send('Chat');
});
app.listen(3001);
//# sourceMappingURL=index.js.map