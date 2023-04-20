import express from 'express';
import userRouter from '../../routes/users.route.js';

const app = express();

app.use(express.json());

app.use('/brukere', userRouter);

app.listen(3000, () => {
    console.log('Serveren lytter på port 3000');
});

app.get('/', () => {
    console.log('hm');
});