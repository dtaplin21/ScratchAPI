const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = 'f46cb147cfc696948c4b076d7ae8b4df';
const baseURl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the API.');
});

app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);

        res.json(response)
    } catch (error) {
        res.json(error)
    }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
