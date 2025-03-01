import pg from 'pg'

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'rj_global_group',
    port: '4321',
    password: 'hakvalchal11',
})

export default pool
