const pool = require("../query")

class Actor {
    static async getAll(req, res) {
        const queries = 'SELECT * FROM actor ORDER BY actor_id ASC'
        pool.query(queries, (err, result) =>{
            if (err) {
                throw err
            }
            return res.status(200).json(result.rows)
        })
    }
    static async getActorById(req, res) {
        const id = req.params.id
        const queries = `SELECT * FROM actor where actor_id = ${id}`
        pool.query(queries, (err, result) =>{
            if (err) {
                throw err
            }
            if (result.rows.length === 0) {
                return res.status(404).json({message: "actor not found"})
            }
            return res.status(200).json(result.rows)
        })
    }
}

module.exports = Actor