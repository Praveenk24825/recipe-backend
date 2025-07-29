const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const recipieRoutes = require("./routes/recipieRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/recipes", recipieRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));