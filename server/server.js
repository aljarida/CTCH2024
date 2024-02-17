const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;


app.use(cors()); // middleware for accepting requests from front-end

app.get("/api/home", (req, res) => {
  res.json({ message: "Hey, mate!" });
})

app.listen(PORT, () => {
  console.log(`Server stated on port ${PORT}`);
});