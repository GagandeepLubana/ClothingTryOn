import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv' 
dotenv.config()

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());

app.use("/", (req, res) => {})

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("CONNECTED TO MONGODB")).catch((err) => console.error("Failed to connect to MongoDB", err))

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));