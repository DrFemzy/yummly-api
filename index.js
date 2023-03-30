const express = require("express")
const helmet = require("helmet")
const bodyParser = require("body-parser")

const app = express()

// Load in all Routers
const feedsRouter = require("./routes/feedsRoutes")
const tagsRouter = require("./routes/tagsRoutes")
const reviewsRouter = require("./routes/reviewsRoutes")
const categoriesRouter = require("./routes/categoriesRoutes")



app.use(helmet());
app.use(bodyParser.json());
app.disable('x-powered-by')

// All Routes
app.use("/feeds", feedsRouter)
app.use("/tags", tagsRouter)
app.use("/reviews", reviewsRouter)
app.use("/categories", categoriesRouter)


app.get("/", (_, res)=>{
    res.json({
        "message": "Yummly API"
    })
})

const APP_PORT = 3000
app.listen(APP_PORT, ()=> {
    console.log("Server listening on Port " + APP_PORT)
})