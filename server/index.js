import express from "express";
import mongoose from "mongoose";
import productRoute from "./routes/product.route.js";
const app = express();
const port = 3000;

//middleware
// json is not accepted by express by default
app.use(express.json());
// middleware - urlencoded is not accepted by express by default - this is for form data
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/products", productRoute);

//connect to mongodb
mongoose
  .connect(
    "mongodb+srv://robinwatson:iYj6OV71Sic638Os@cluster0.yvxzp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });
