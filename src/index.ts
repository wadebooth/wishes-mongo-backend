import express from 'express';
import cors from 'cors';
import { createWish, getWishes } from './service/wish-list.service';

const app = express();
app.use(express.json());
app.use(cors());
app.post('/', async (request, response) => {
    try {
        await createWish(request.body);
        response.send(200);
    } catch (e) {
        response.status(400).send({
            message: 'Wish is not possible',
        })
    }
})

app.get('/', async (req, res) => {
    const wishes = await getWishes();
    res.send(wishes);
});

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
});