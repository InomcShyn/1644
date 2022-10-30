const Pool = require('pg').Pool;
const pg_conn = new Pool({
    user: 'ktkgliyizvjfpv',
    password: 'ef1ae5e0e7fc7468808c65addb10b4e62963af7102d9e5a6e22b4d80202de129',
    host: 'ec2-54-175-79-57.compute-1.amazonaws.com',
    database: 'd11tf418b7lopf',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
});

module.exports = pg_conn;