import { client } from "../database"
export const home = (req, res) => {
    if(req.session.loggedin){
        res.send('Bienvenido: <b>'+req.session.usuario+'<br><br> <a href="/logout">Cerrar sesion</a>')
    }else{
        res.redirect("/login");
    }
}

export const login = (req, res) => {
    res.sendFile(__dirname.replaceAll('\\','/')+"/public/login.html");
}

export const logout = (req, res) => {
    req.session.destroy();
    res.redirect('/login');
}
export const signup = (req, res) => {
    res.sendFile(__dirname.replaceAll('\\','/')+"/public/signup.html");
}

export const signupUser = async(req, res) => {
    try {
        let now = new Date();
        const fecha_registro_persona = now.toLocaleDateString();
        const {nombre_persona, direccion_persona, email, usuario, password, id_rol} = req.body;
        let querySql = `
        INSERT INTO Personas 
        (nombre_persona, direccion_persona, email, fecha_registro_persona)
        VALUES
        ('${nombre_persona}','${direccion_persona}','${email}','${fecha_registro_persona}');
        `;
        const newPersona = await client.query(querySql);

        querySql = "SELECT id_persona FROM Personas ORDER BY id_persona DESC LIMIT 1"
        const ultimaPersona = await (await client.query(querySql)).rows[0].id_persona;
        querySql = `
        INSERT INTO Usuarios 
        (usuario, password, id_rol, fecha_usuario, id_persona)
        VALUES
        ('${usuario}','${password}','${id_rol}','${fecha_registro_persona}', '${ultimaPersona}');
        `;
        const newUsuario = await client.query(querySql);
        /*res.json({
            message : "Persona created succesfully",
            data : req.body
        });*/
        res.redirect("/home");
    } catch (error) {
        res.status(500).json({
            "error" : error
        });
    }
}