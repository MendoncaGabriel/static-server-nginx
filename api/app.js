const express = require("express")

const app = express()
app.get("/api", (req, res) => {
  res.status(200).send("hello world")
})
const PORT = 9000
app.listen(PORT, () => {
  console.log("server run in " + PORT)
})
