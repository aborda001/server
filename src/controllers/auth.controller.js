//import jsonwebtoken from "jsonwebtoken";
import { client } from "../database";
import { session } from "../app"

export const signin = async (req, res) => {
    try {
        const { usuario, password } = req.body;
        const querySql = `SELECT id_usuario, password FROM Usuarios WHERE usuario = '${usuario}';`;
        const dataDb = await client.query(querySql);
        
        if ( dataDb.rowCount == 0 ) {
            /*return res.status(404).json({
                message : "Usuario not found"
            });*/
            return res.send('<a href="/logout">Usuario not found</a>');
        }

        const id_usuario = dataDb.rows[0].id_usuario;
        const passwordDb = dataDb.rows[0].password;

        if ( passwordDb != password ) {
            /*return res.status(401).json({
                message : "Password incorrect"
            });*/
            
            return res.send('<a href="/logout">Password incorrect</a>');
        }

        req.session.loggedin = true;
        req.session.usuario = usuario;

        /*const token = jsonwebtoken.sign(
            {id: id_usuario},
            "SECRET",
            {expiresIn: 86400}
        );
        res.json(token);*/
        res.redirect("/home");
    } catch (error) {
        res.status(500).json({
            "error" : error
        });
    }
}