const axios = require("axios");

const autoComplete = (req, res) => {
    const options = {
        method: 'GET',
        params: req.query,
        headers: {
            'X-RapidAPI-Key': req.headers["x-rapidapi-key"],
            'X-RapidAPI-Host': req.headers["x-rapidapi-host"]
        }
    };




    axios.get("https://yummly2.p.rapidapi.com/feeds/auto-complete", options)
        .then((response) => {            
            // Response details and status
            res.status(response.status).json(response.data)
        })
        .catch((err) => {
            res.status(err.response?.status).json(err.response?.data)
        })
}

const search = (req, res) => {
    const options = {
        method: 'GET',
        params: req.query,
        headers: {
            'X-RapidAPI-Key': req.headers["x-rapidapi-key"],
            'X-RapidAPI-Host': req.headers["x-rapidapi-host"]
        }
    };



    axios.get("https://yummly2.p.rapidapi.com/feeds/search", options)
        .then((response) => {
            res.status(response.status).json(response.data)
        })
        .catch((err) => {
            res.status(err.response?.status).json(err.response?.data)
        })
}

const list = (req, res) => {
    const options = {
        method: 'GET',
        params: req.query,
        headers: {
            'X-RapidAPI-Key': req.headers["x-rapidapi-key"],
            'X-RapidAPI-Host': req.headers["x-rapidapi-host"]
        }
    };



    axios.get("https://yummly2.p.rapidapi.com/feeds/list", options)
        .then((response) => {
            res.status(response.status).json(response.data)
        })
        .catch((err) => {
            res.status(err.response?.status).json(err.response?.data)
        })
}

const listSimilarities = (req, res) => {
    const options = {
        method: 'GET',
        params: req.query,
        headers: {
            'X-RapidAPI-Key': req.headers["x-rapidapi-key"],
            'X-RapidAPI-Host': req.headers["x-rapidapi-host"]
        }
    };



    axios.get("https://yummly2.p.rapidapi.com/feeds/list-similarities", options)
        .then((response) => {
            res.status(response.status).json(response.data)
        })
        .catch((err) => {
            res.status(err.response?.status).json(err.response?.data)
        })
}

module.exports = { autoComplete, search, list, listSimilarities }