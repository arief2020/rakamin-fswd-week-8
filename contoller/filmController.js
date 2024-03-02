const pool = require("../query")

class Film {
    static async getAll(req, res) {
        const category = req.query.category;
        let queries = 'SELECT * FROM film ORDER BY film_id ASC'
        if (!category) {
            console.log("category is empty")
        } else {
            queries = `SELECT film.*, JSONB_AGG(JSONB_BUILD_OBJECT(
                'category_id', category.category_id,
                'category_name', category.name
            )) AS category
            
            FROM film JOIN film_category ON film.film_id = film_category.film_id
            JOIN category ON film_category.category_id = category.category_id 
            WHERE category.name = '${category}'
            GROUP BY film.film_id;
            `
        }
        pool.query(queries, (err, result) =>{
            if (err) {
                throw err
            }
            res.status(200).json(result.rows)
        })
    }
    static async getFilmById(req, res) {
        const id = req.params.id
        const queries = `SELECT * FROM film where film_id = $1`
        pool.query(queries, [id], (err, result) =>{
            if (err) {
                throw err
            }
            if (result.rows.length === 0) {
                return res.status(404).json({message: "film id not found"})
            }
            return res.status(200).json(result.rows)
        })
    }

    static async getFilmByCategoryId(req, res) {
        const id = req.params.id
        let queries = `SELECT film.*, JSONB_AGG(JSONB_BUILD_OBJECT(
                'category_id', category.category_id,
                'category_name', category.name
            )) AS category FROM film 
        JOIN film_category ON film.film_id = film_category.film_id
            JOIN category ON film_category.category_id = category.category_id 
            WHERE category.category_id = $1
            GROUP BY film.film_id;
            `
        pool.query(queries, [id], (err, result) =>{
            if (err) {
                throw err
            }
            if (result.rows.length === 0) {
                return res.status(404).json({message: "Category id not found"})
            } 
            return res.status(200).json(result.rows)
        })
    }
}

module.exports = Film