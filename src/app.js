import express from "express"

import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express()


app.use(express.json());

//Rourtes
app.use('/api', indexRoutes);
app.use('/api', employeesRoutes);
app.use((req, res, next) => {
  res.status(404).send({ "error": "endpoint not found" });
})

export default app;