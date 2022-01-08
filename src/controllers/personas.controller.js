import { client } from "../database"

export const createPersona = async(req, res) => {
    try {
        let now = new Date();
        const fecha_registro_persona = now.toLocaleDateString();
        const {nombre_persona, direccion_persona, email} = req.body;
        const querySql = `
        INSERT INTO Personas 
        (nombre_persona, direccion_persona, email, fecha_registro_persona)
        VALUES
        ('${nombre_persona}','${direccion_persona}','${email}','${fecha_registro_persona}');
        `;
        const newPersona = await client.query(querySql);
        res.json({
            message : "Persona created succesfully",
            data : req.body
        });
    } catch (error) {
        res.status(500).json({
            "error" : error.detail
        });
    }
}

export const getPersonas = async(req, res) => {
    try {
        const querySql ="SELECT * FROM Personas;";
        const allPersonas = await client.query(querySql);
        res.json(allPersonas.rows);
    } catch (error) {
        res.status(500).json({
            "error" : error.detail
        });
    }
}

export const getPersonaById = async(req, res) => {
    try {
        const { id } = req.params;
        const querySql =`SELECT * FROM Personas WHERE id_persona = '${id}';`;
        const persona = await client.query(querySql);

        if ( persona.rowCount == 0 ) {
            return res.status(404).json({
                message : "Persona not found"
            });
        }

        res.json(persona.rows[0]);
    } catch (error) {
        res.status(500).json({
            "error" : error.detail
        });
    }
}

export const updatePersonaById = async(req, res) => {
    try {
        const { id } = req.params;
        const {nombre_persona, direccion_persona, email} = req.body;
        const querySql =`
        UPDATE Personas SET
            nombre_persona = '${nombre_persona}',
            direccion_persona = '${direccion_persona}',
            email = '${email}'
        WHERE id_persona = '${id}';
        `;
        const persona = await client.query(querySql);
        
        if ( persona.rowCount == 0 ) {
            return res.status(404).json({
                message : "Persona not found"
            });
        }
        
        res.json({
            message : "Persona updated succesfully",
            data: req.body
        });
    } catch (error) {
        res.status(500).json({
            "error" : error.file
        });
    }
}

export const deletePersonaById = async(req, res) => {
    try {
        const { id } = req.params;
        const querySql =`DELETE FROM Personas WHERE id_persona = '${id}';`;
        const persona = await client.query(querySql);

        if ( persona.rowCount == 0 ) {
            return res.status(404).json({
                message : "Persona not found"
            });
        }

        res.json({
            message : "Persona deleted succesfully"
        });
    } catch (error) {
        res.status(500).json({
            "error" : error.detail
        });
    }
}