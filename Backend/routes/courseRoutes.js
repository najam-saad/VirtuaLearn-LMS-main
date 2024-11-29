const express = require('express');

const router = express.Router();
const courseController = require('../controllers/courseController');

router
  .route('/')
  .get(courseController.getAllCourses)
  .post(courseController.createCourse);
router.route('/:id').get(courseController.getCourse);
//router.route('/login').post(userController.getUser);
// router
//   .route('/:id')
//   .get(tourController.getTour)
//   .patch(tourController.updateTour)
//   .delete(tourController.deleteTour);

module.exports = router;

// const express = require('express');

// const router = express.Router();
// const userController = require('./../controllers/userController');

// router
//   .route('/')
//   .get(userController.getAllUsers)
//   .post(userController.createUser);
// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

// module.exports = router;
