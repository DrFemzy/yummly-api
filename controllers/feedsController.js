const axios = require("axios");
const { removeHeaders } = require("../utils/headers");

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

            // console.log(response.data)
            // Remove the extra Headers
            removeHeaders(res)
            
            // Response details and status
            res.writeHead(response.status, response.headers)
            res.write(JSON.stringify(response.data) || {message: "Sth"});
            res.end()
        })
        .catch((err) => {
            removeHeaders(res) // remove the extra headers

            // The Error response details and status
            res.writeHead(err.response?.status, err.response?.headers)
            res.write(JSON.stringify(err.response?.data));
            res.end()
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

            // Remove the extra Headers
            removeHeaders(res)
            
            // Response details and status
            res.writeHead(response.status, response.headers)
            res.write(JSON.stringify(response.data));
            res.end()
        })
        .catch((err) => {
            removeHeaders(res) // remove the extra headers

            // The Error response details and status
            res.writeHead(err.response?.status, err.response?.headers)
            res.write(JSON.stringify(err.response?.data));
            res.end()
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

            // Remove the extra Headers
            removeHeaders(res)
            
            // Response details and status
            res.writeHead(response.status, response.headers)
            res.write(JSON.stringify(response.data));
            res.end()
        })
        .catch((err) => {
            removeHeaders(res) // remove the extra headers

            // The Error response details and status
            res.writeHead(err.response?.status, err.response?.headers)
            res.write(JSON.stringify(err.response?.data));
            res.end()
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

            // Remove the extra Headers
            removeHeaders(res)
            
            // Response details and status
            res.writeHead(response.status, response.headers)
            res.write(JSON.stringify(response.data));
            res.end()
        })
        .catch((err) => {
            removeHeaders(res) // remove the extra headers

            // The Error response details and status
            res.writeHead(err.response?.status, err.response?.headers)
            res.write(JSON.stringify(err.response?.data));
            res.end()
        })
}

module.exports = { autoComplete, search, list, listSimilarities }