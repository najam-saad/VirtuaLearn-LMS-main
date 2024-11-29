const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
const Course = require('../../models/courseModel');

dotenv.config({ path: './../../config.env' });

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
  })
  .then((con) => {
    //console.log(con.connection);
    console.log('DB Connection Successfull');
  });
//Read json file
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/courses-simple.json`, 'utf-8')
);
//import data into db
const importData = async () => {
  try {
    await Course.create(tours);
    console.log('Data Loaded');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};
//delete all data from db
const deleteData = async () => {
  try {
    await Course.deleteMany();
    console.log('Data Deleted');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
console.log(process.argv);
