const Pool = require("pg").Pool;
const conn = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'blog'
});

conn.connect((err) => {
    if (err) {
        console.log("Error!!!", err.message);
    } else {
        console.log("Success!!! Database has been connected");
    }
});

module.exports = conn;