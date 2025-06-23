const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const paymentRoutes = require("./routes/payments");

const app = express();
app.use(cors({ origin: "*", credentials: true }));
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/payments", paymentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
