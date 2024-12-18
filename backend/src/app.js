import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"
import receiptionistRouter from "./routes/receiptionist.routes.js"
import doctorRouter from "./routes/doctor.routes.js"
import swaggerUi from "swagger-ui-express";
import path from 'path';
import { fileURLToPath } from "url";
import swaggerJsDoc from "swagger-jsdoc";

const __dirname1 = path.dirname(fileURLToPath(import.meta.url));
const __dirname2 = path.join(__dirname1, '../');

const app = express()

import { openapi } from "../openapi.js"

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(cookieParser());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/users/receptionist", receiptionistRouter);
app.use("/api/v1/users/doctor", doctorRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapi));

app.get('/swagger-json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerJson);
});

// DEPLOYMENT CODE
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname2, '/frontend/dist')));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname2, 'frontend', 'dist', 'index.html')));
}
else {
    app.get('/', (req, res) => {
        res.send('Server is running in dev mode');
    });
    console.log('=== Dev Mode server.js ===');
}


export { app }

