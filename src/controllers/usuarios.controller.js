import { client } from "../database"

export const createUsuario = async(req, res) => {
    try {
        let now = new Date();
        const fecha_usuario = now.toLocaleDateString();
        const {usuario, password, id_rol, id_persona} = req.body;
        const querySql = `
        INSERT INTO Usuarios 
        (usuario, password, id_rol, fecha_usuario, id_persona)
        VALUES
        ('${usuario}','${password}','${id_rol}','${fecha_usuario}', '${id_persona}');
        `;
        const newUsuario = await client.query(querySql);
        res.json({
            message : "Usuario created succesfully",
            data : req.body
        });
    } catch (error) {
        res.status(500).json({
            "error" : error.detail
        });
    }
}

export const getUsuarios = async(req, res) => {
    try {
        const querySql ="SELECT * FROM Usuarios;";
        const allUsuarios = await client.query(querySql);
        res.json(allUsuarios.rows);
    } catch (error) {
        res.status(500).json({
            "error" : error.detail
        });
    }
}

export const getUsuarioById = async(req, res) => {
    try {
        const { id } = req.params;
        const querySql =`SELECT * FROM Usuarios WHERE id_usuario = '${id}';`;
        const usuario = await client.query(querySql);

        if ( usuario.rowCount == 0 ) {
            return res.status(404).json({
                message : "Usuario not found"
            });
        }

        res.json(usuario.rows[0]);
    } catch (error) {
        res.status(500).json({
            "error" : error.detail
        });
    }
}

export const updateUsuarioById = async(req, res) => {
    try {
        const { id } = req.params;
        const {usuario, password, id_rol, id_persona} = req.body;
        const querySql =`
        UPDATE Usuarios SET
            usuario = '${usuario}',
            password = '${password}',
            id_rol = '${id_rol}',
            id_persona = '${id_persona}'
        WHERE id_usuario = '${id}';
        `;
        const usuariodb = await client.query(querySql);
        
        if ( usuariodb.rowCount == 0 ) {
            return res.status(404).json({
                message : "Usuario not found"
            });
        }
        
        res.json({
            message : "Usuario updated succesfully",
            data: req.body
        });
    } catch (error) {
        res.status(500).json({
            "error" : error.file
        });
    }
}

export const deleteUsuarioById = async(req, res) => {
    try {
        const { id } = req.params;
        const querySql =`DELETE FROM Usuarios WHERE id_usuario = '${id}';`;
        const usuario = await client.query(querySql);

        if ( usuario.rowCount == 0 ) {
            return res.status(404).json({
                message : "Usuario not found"
            });
        }

        res.json({
            message : "Usuario deleted succesfully"
        });
    } catch (error) {
        res.status(500).json({
            "error" : error.detail
        });
    }
}