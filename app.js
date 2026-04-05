const express = require('express');
const app = express();
const mongoose = require('mongoose');
const redisClient = require('./config/redis.js');
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const DB_URL = process.env.MONGO_URL; 

// To read form data (URL-encoded data)
// true = allows nested objects
app.use(express.urlencoded({ extended: true }));


const userRouter = require('./routes/users.js');

app.use(express.json()); // To read JSON data from the request body.
app.use('/users', userRouter);


async function main(){
    try{
        await mongoose.connect(DB_URL);
        console.log('Connected to DataBase');

        app.listen(PORT, () =>{
            console.log(`Server is listening on PORT ${PORT}`);
        });

    } catch(err){
        console.error("Error: ", err);
    }
}


app.get('/', (req, res) =>{
    res.send("Heyy! I'm Root");
});

main();