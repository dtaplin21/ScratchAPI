const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

//const apiKey = 'f46cb147cfc696948c4b076d7ae8b4df';


const generateUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to the API.');
});


// GET productID
app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;

    try {
        const response = await request(`${generateUrl(api_key)}&url=https://www.amazon.com/dp/${productId}`);

        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error)
    }
})


// GET product review
app.get('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;

    try {
        const response = await request(`${generateUrl(api_key)}&url=https://www.amazon.com/product-review/${productId}`);

        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error)
    }
})

app.get('/products/:productId/offers', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;

    try {
        const response = await request(`${generateUrl(api_key)}&url=https://www.amazon.com/gp/offer-listing${productId}`);

        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error)
    }
})

app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params;
    const { api_key } = req.query;

    try {
        const response = await request(`${generateUrl(api_key)}&url=https://www.amazon.com/s?k=${searchQuery}`);

        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error)
    }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
