require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');

/*
TEMA: rezervari case de vacanta, apartamente
inspiratie: airbnb

ENTITATE: postare despre casa/apartament

CAMPURI: 
  - nume utilizator
  - titlu
  - categorie (casa de vacanta, apartament)
  - descriere postare
  - locatia casei/apartamentului
  - pretul pe noapte

RUTE:
  /home, /case, /apartamente, /post/:id 
*/

const PORT = 3000;

const staticPath = __dirname + '/public'; 
const routesPath = __dirname + '/routes';

const homeRouter = require(routesPath + '/home.js');
const postRouter = require(routesPath + '/post.js')

app.use(cors());
  
app.use(express.static(staticPath));

app.use('/', homeRouter);
app.use('/posts', postRouter);

app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.....`)
  mongoose.connect(process.env.MONGODB_URI)
   .then(() => {
     console.log('Connected to MongoDB');
   })
   .catch((error) => {
     console.error('Failed to connect to MongoDB:', error);
   });
});