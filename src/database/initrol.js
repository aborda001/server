import { client } from "../database";

export const createRol = async() => {
    const querySql = `
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