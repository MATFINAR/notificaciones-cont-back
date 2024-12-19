import pool from "../config/db.mysql.js";

export const listNoti = async (req, res) =>{
	try {
		const respuesta = await pool.query('SELECT * FROM notificaciones');
		if (respuesta.length > 0) {
			res.json(respuesta[0]);
		} else {
			res.json({ message: 'no hay ninguna notificaciones guardada'})
		}
	} catch (error) {
		res.json({
			error: error.message,
			message: 'Hubo un error en la consulta get'
		});
  };
};

export const getNoti = async (req, res) => {
    const { titulo, descripcion, recordar_fecha, prioridad } = req.body;

    // Función para construir las condiciones dinámicas
    const buildConditions = (field, value) => {
        const terms = value.split(/\s+/); // Divide el valor en palabras
        return terms.map(term => ({
            condition: `${field} LIKE ?`, // Construye la condición
            param: `%${term}%`           // Agrega comodines para búsqueda
        }));
    };

    const conditions = []; // Lista de condiciones para la consulta
    const params = [];     // Lista de parámetros para la consulta

    // Agrega condiciones dinámicamente si existen valores
    if (titulo) {
        buildConditions('titulo', titulo).forEach(({ condition, param }) => {
            conditions.push(condition);
            params.push(param);
        });
    }
    if (descripcion) {
        buildConditions('descripcion', descripcion).forEach(({ condition, param }) => {
            conditions.push(condition);
            params.push(param);
        });
    }
    if (recordar_fecha) {
        buildConditions('recordar_fecha', recordar_fecha).forEach(({ condition, param }) => {
            conditions.push(condition);
            params.push(param);
        });
    }
    if (prioridad) {
        buildConditions('prioridad', prioridad).forEach(({ condition, param }) => {
            conditions.push(condition);
            params.push(param);
        });
    }

    // Si no hay condiciones, responde con un error
    if (conditions.length === 0) {
        return res.status(400).json({ message: 'No se proporcionaron términos de búsqueda válidos.' });
    }

    // Construye la consulta SQL con las condiciones dinámicas
    const sqlQuery = `SELECT * FROM notificaciones WHERE ${conditions.join(' AND ')}`;

    try {
        // Ejecuta la consulta con los parámetros
        const [resultado] = await pool.query(sqlQuery, params);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(404).json({ message: 'No se encontraron notificaciones' });
        }
    } catch (error) {
        // Manejo de errores
        res.status(500).json({ error: error.message, message: 'Hubo un error en la consulta get' });
    }
};

export const postNoti = async (req, res) => {

}