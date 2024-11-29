const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');
const mongoose = require('mongoose');

//getting db connection string
const db = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
//connecting to ATLAS database on cloud
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    //console.log(con.connection);
    console.log('DB Connection Successfull');
  });
console.log(app.get('env'));
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
