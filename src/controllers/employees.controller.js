import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    //console.log("Obteniendo empleado")

    //res.send("Obteniendo empleados")

    /*try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).send(error.message);
    }*/

    const [rows] = await pool.query("Select * from employee");
    res.json(rows)

};

export const createEmployees = async (req, res) => {
    const { name, salary } = req.body;
    await pool.query("INSERT INTO employee (name, salary) VALUES (?,?)", [name, salary])
    res.send(
        name,
        salary
    )
    //res.send("POST SUCCESS")

}

export const updateEmployees = (req, res) => res.send("Actualizando empleados");

export const deleteEmployees = (req, res) => res.send("Eliminado empleados");


