import express, { urlencoded } from 'express';
const app = express();
const port = 3000;

app.use(urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.send('Velkommen til nettbutikken!');
});

app.listen(port, () => {
    console.log(`Appen kjører på http://localhost:${port}`);
});

app.get('/brukere', () => {
    console.log('hm');
});