const pool = require("../query")

class Category {
    static async getAll(req, res) {
        const queries = 'SELECT * FROM category ORDER BY category_id ASC'
        pool.query(queries, (err, result) =>{
            if (err) {
                throw err
            }
            res.status(200).json(result.rows)
        })
    }
    static async getCategoryById(req, res) {
        const id = req.params.id
        const queries = `SELECT * FROM category where category_id = ${id}`
        pool.query(queries, (err, result) =>{
            if (err) {
                throw err
            }
            if (result.rows.length === 0) {
                return res.status(404).json({message: "film id not found"})
            }
            return res.status(200).json(result.rows)
        })
    }
}

module.exports = Category