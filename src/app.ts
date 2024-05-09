import express from 'express';
import { Request, Response } from "express"
import cors from 'cors'

const app = express();

app.use(cors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE'
}))

app.use(express.json())
//app.use(routes);

export default app