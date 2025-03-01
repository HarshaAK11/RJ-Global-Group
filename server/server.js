import express from 'express'
import pool from './db.js'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.post('/api/message', async(req, res) => {
    const { name, email, message } = req.body

    try {
        const newQuery = await pool.query("INSERT INTO message (name, email, message) VALUES ($1, $2, $3) RETURNING *", [name, email, message])
        res.json(newQuery.rows[0])
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ 'error': 'Failed to insert query' })
    }
})

app.get('/', (req, res) => {
    res.send('Hello from the server!')
})

app.listen(3000, () => console.log('Server is running on port 3000'))