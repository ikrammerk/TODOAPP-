import express from 'express'
import list from './routes/list.route.js'
import task from './routes/task.route.js'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT = 8000;

const app = express()
app.use(cors());

mongoose.connect('mongodb+srv://USERNAME:PASSWORD@cluster0.mgaae.mongodb.net/tasks?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error",
  console.error.bind(console, "There was a connection error: ")
);

db.once("open", function () {
  console.log("Connected successfully to db");
});

app.use(bodyParser.json());

app.use('/list', list);
app.use('/list', task);

app.listen(PORT, () =>
  console.log(`The server is running on Port: ${PORT}`)
)