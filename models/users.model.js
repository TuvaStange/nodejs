import mysql from 'mysql2/promise';
import dbConfig from '../server/config/db.config.js';

const pool = mysql.createPool(dbConfig);

const User = {
    getAll: async () => {
        const [rows] = await pool.execute('SELECT * FROM brukere');
        return rows;
    },
    create: async (newUser) => {
        const { firstName, lastName, email, password } = newUser;
        const [result] = await pool.execute(
            'INSERT INTO brukere (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)',
            [firstName, lastName, email, password]
        );
        const id = result.insertId;
        return { id, ...newUser };
    }
};

export default User;