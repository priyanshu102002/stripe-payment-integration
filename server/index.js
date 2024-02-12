import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import paymentRoutes from "./routes/payment.js"

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))


app.use('/api', paymentRoutes);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
});