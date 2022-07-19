const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(routes);

app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`));



















































// const mysql = require('mysql2');


// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'todos_db',
//   password: 'password',
// });


// const PORT = 3001;


// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended :true}));


// app.get('/api/todos', (req, res) => {
  
//   connection.query('SELECT * FROM todos;', (err, rows) => {
//     if (err) {
//       return res.status(400).json(err);
//     }

//     console.log("**************I AM ROWS****************")
//     console.log(rows)
//     res.json(rows);
//   });
// });


// app.listen(PORT, () => console.log('Success!!!')); 