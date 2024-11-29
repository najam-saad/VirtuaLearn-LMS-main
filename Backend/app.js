const express = require('express');

const app = express();
app.use(express.json());
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');
const courseRouter = require('./routes/courseRoutes');
//const userRouter = require('./routes/userRoutes');

app.use(express.static(`${__dirname}/public`));
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// app.use((req, res, next) => {
//   console.log('Hello from MiddleWare 1');
//   next();
// });
// app.use((req, res, next) => {
//   console.log('Hello Form MiddleWare 2');
//   req.requestTime = new Date().toISOString();
//   next();
// });
app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);
//app.use('/api/v1/users', userRouter);
module.exports = app;
