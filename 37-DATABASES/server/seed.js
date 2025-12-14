import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

export const db = new pg.Pool({
    connectionString: process.env.DB_CONN_STRING,
});

db.query(
`CREATE TABLE IF NOT EXISTS messages(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    msg_name TEXT,
    content TEXT
)`);

db.query(
  `INSERT INTO messages (msg_name, content) VALUES ('hello there','general kenobi')`
);

db.query(
    `INSERT INTO messages (msg_name, content) VALUES ($1, $2)`, [
        "Does anyone else...",
        "Love oranges?"
    ]
);