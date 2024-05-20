import { pool } from "../db.js";

export const getEmployees = async (req, res) => {

    //res.send("Obteniendo empleados")
    //console.log("Obteniendo empleado")

    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).send(error.message);
    }

    //const result = await pool.query("Select * from employee");
    //res.send(result.json)

};

export const createEmployees = async (req, res) => {
    res.send("POST SUCCESS")
    /*const { name, salary } = req.body;
    await pool.query("INSERT INTO employees (name, salary) VALUES (?,?)", [name, salary])
    res.send(
        name,
        salary
    )*/
}

export const updateEmployees = (req, res) => res.send("Actualizando empleados");

export const deleteEmployees = (req, res) => res.send("Eliminado empleados");


