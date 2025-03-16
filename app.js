import express from 'express';

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

import { PORT } from './config/env.js';
import connectToDatabase from './database/mongodb.js';

const app = express();

app.use(express.json());


app.use("/api/v1/auth", authRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/posts", subscriptionRouter)

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    connectToDatabase()
})

export default app;