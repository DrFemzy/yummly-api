const axios = require("axios");
const { removeHeaders } = require("../utils/headers");

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

module.exports = { list }