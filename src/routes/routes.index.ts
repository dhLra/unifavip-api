import authRoutes from "./auth/auth.routes"


const routes = require('express').Router();
const prefix = '/api/v1'

routes.use(`${prefix}/auth`, authRoutes);