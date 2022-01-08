import { client } from "../database"

export const createRole = async(req, res) => {
    try {
        const {nombre_rol} = req.body;
        const querySql = `
        INSERT INTO Roles 
        (nombre_rol)
        VALUES
        ('${nombre_rol}')
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
    
}

export const getRoleById = async(req, res) => {
    
}

export const updateRoleById = async(req, res) => {
    
}

export const deleteRoleById = async(req, res) => {
    
}