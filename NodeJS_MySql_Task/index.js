//Create DB connection
//Create Database
//Create Table
//Insert Record
//Display Record => SELECT * from studentInfo

const express = require('express')
const mysql = require('mysql')
const app = express()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'University'
});
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected successfully to MySql server")
});
//db-create => create Database
app.get("/db-create", (req, res) => {
    const dbquery = "CREATE DATABASE IF NOT EXISTS University";
    connection.query(dbquery, (err, result) => {
        if (err) throw err;
        console.log("Database created successfully", result)
    })
});
//db-table => Create Table in University DB
app.get("/db-table", (req, res) => {
    const dbtable = `CREATE TABLE IF NOT EXISTS facultyInfo(
                     studentID varchar(10) NOT NULL,
                     fname varchar(50) NOT NULL,
                     lname varchar(50) NOT NULL,
                     mobileNo varchar(15) NOT NULL,
                     PRIMARY KEY (studentID))`
    // SHOW DATABASES => List the available DB from MySql server
    
    
    connection.query(dbtable, (err, result) => {
        if (err) throw err;
        console.log("Table created successfully", result)
    });

});
//db-insert => Insert Record into studentInfo Table

app.get("/db-insert", (req, res) => {
    const dbInsert = `INSERT INTO facultyInfo
                    (studentID,fname,lname,mobileNo)
                    VALUES ('101','Mrugendra','Rahevar','123456789'),
                    ('102','Martin','Parmar','123456789'),
                    ('103','Karan','Goswami','123456789')`;
    connection.query(dbInsert, (err, result) => {
        if (err) throw err;
        console.log(`Total affected ROWS: ${result['affectedRows']}`)
    })
});
app.get("/db-display", (req, res) => {
    const dbDisplay = "SELECT * FROM facultyInfo";
    connection.query(dbDisplay, (err, result) => {
        if (err) throw err;
        console.log(result)
    })
});
app.listen(3000, () => {
    console.log("Server is running on port number 3000");
})