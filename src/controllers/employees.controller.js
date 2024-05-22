import { pool } from "../db.js";

export const getEmployees = async (req, res) => {

    /*try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).send(error.message);
    }*/

    const [rows] = await pool.query("Select * from employee");
    res.json(rows)

};

export const getEmployeeId = async (req, res) => {
    const [rows] = await pool.query("Select * from employee Where id = ?", [req.params.id])
    if (rows.length <= 0) return res.status(404).json({
        message: "Employee not found"
    })

    return res.send(rows[0])


}

export const createEmployees = async (req, res) => {
    const { name, salary } = req.body;
    const [ResultSetHeader] = await pool.query("INSERT INTO employee (name, salary) VALUES (?,?)", [name, salary])
    res.status(201).send(
        {
            id: ResultSetHeader.insertId,
            name,
            salary
        }
    )


}

export const updateEmployees = async (req, res) => {
    const { name, salary } = req.body;
    const [rows] = await pool.query("Update employee SET name = ?, salary = ? where id = ?", [name, salary, req.params.id])
    if(rows.affectedRows<=0) return res.status(404).json({
        message: "Employee not found"
    })
    //res.send(rows)
};

export const deleteEmployees = async (req, res) => {
    const [rows] = await pool.query("Delete from employee where id = ?", [req.params.id])

    if (rows.affectedRows <= 0) return res.status(404).json({
        message: "Employee not found"
    })
    res.sendStatus(204)
};


