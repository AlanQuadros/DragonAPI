const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) =>{
  res.json ({ message: "Dragon API"})}
)

require("./app/routes/dragon.routes.js")(app);

app.listen(3000, () => {
  console.log("Server running in port 3000")
})
