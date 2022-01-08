import { client } from "../database";

export const createRol = async() => {
    let querySql ="SELECT * FROM Roles;";
    const allRoles = await client.query(querySql);
    if (allRoles.rowCount == 0){
        querySql = `
        INSERT INTO Roles 
            (nombre_rol)
            VALUES
            ('Administrador');
        INSERT INTO Roles 
            (nombre_rol)
            VALUES
            ('Maestro');
        INSERT INTO Roles 
            (nombre_rol)
            VALUES
            ('Estudiante');
        `;
        try {
            const res = await client.query(querySql);
            console.log("'Roles' is successfully created");
        } catch (err) {
            console.log(err.stack);
        }
    }
}