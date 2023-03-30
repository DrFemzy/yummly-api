const axios = require("axios");

const list = (req, res) => {
    const options = {
        method: 'GET',
        params: req.query,
        headers: {
            'X-RapidAPI-Key': req.headers["x-rapidapi-key"],
            'X-RapidAPI-Host': req.headers["x-rapidapi-host"]
        }
    };



    axios.get("https://yummly2.p.rapidapi.com/reviews/list", options)
        .then((response) => {
            res.status(response.status).json(response.data)
        })
        .catch((err) => {
            res.status(err.response?.status).json(err.response?.data)
        })
}

module.exports = { list }