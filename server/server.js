require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose")
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors()); // middleware for accepting requests from front-end

mongoose.connect(
  process.env.MONGODB_URI, 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
);

app.get("/api/home", (req, res) => {
  res.json({ message: "Hey, mate!", people: ["Marcus", "Aurelius", "Luther", "King", "Jason", "Clark"] });
})

app.listen(PORT, () => {
  console.log(`Server stated on port ${PORT}`);
});