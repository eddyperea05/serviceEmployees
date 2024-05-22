import express from "express"

import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
//import body-parse
const port = 3000;
const app = express()


app.use(express.json());

//Rourtes
app.use('/api', indexRoutes);
app.use('/api', employeesRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

