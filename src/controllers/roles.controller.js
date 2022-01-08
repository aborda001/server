import { client } from "../database"

export const createRole = async(req, res) => {
    try {
        const {nombre_rol} = req.body;
        const querySql = `
        INSERT INTO Roles 
        (nombre_rol)
        VALUES
        ('${nombre_rol}');
        `;
        const newRole = await client.query(querySql);
        res.json({
            message : "Role created succesfully",
            data : req.body
        });
    } catch (error) {
        res.status(500).json({
            "error" : error.detail
        });
    }
}

export const getRoles = async(req, res) => {
    try {
        const querySql ="SELECT * FROM Roles;";
        const allRoles = await client.query(querySql);
        res.json(allRoles.rows);
    } catch (error) {
        res.status(500).json({
            "error" : error.detail
        });
    }
}

export const getRoleById = async(req, res) => {
    try {
        const { id } = req.params;
        const querySql =`SELECT * FROM Roles WHERE id_rol = '${id}';`;
        const role = await client.query(querySql);

        if ( role.rowCount == 0 ) {
            return res.status(404).json({
                message : "Role not found"
            });
        }

        res.json(role.rows[0]);
    } catch (error) {
        res.status(500).json({
            "error" : error.detail
        });
    }
}

export const updateRoleById = async(req, res) => {
    try {
        const { id } = req.params;
        const { nombre_rol } = req.body;
        const querySql =`
        UPDATE Roles SET
            nombre_rol = '${nombre_rol}'
        WHERE id_rol = '${id}';
        `;
        const student = await client.query(querySql);
        
        if ( student.rowCount == 0 ) {
            return res.status(404).json({
                message : "Role not found"
            });
        }
        
        res.json({
            message : "Role updated succesfully",
            data: req.body
        });
    } catch (error) {
        res.status(500).json({
            "error" : error.file
        });
    }
}

export const deleteRoleById = async(req, res) => {
    try {
        const { id } = req.params;
        const querySql =`DELETE FROM Roles WHERE id_rol = '${id}';`;
        const role = await client.query(querySql);

        if ( role.rowCount == 0 ) {
            return res.status(404).json({
                message : "Role not found"
            });
        }

        res.json({
            message : "Role deleted succesfully"
        });
    } catch (error) {
        res.status(500).json({
            "error" : error.detail
        });
    }
}