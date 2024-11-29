const User = require('../models/userModel');
const APIFeatures = require('../utils/apiFeatures');
// exports.getAllTours = async (req, res) => {
//   try {
//     //executing query
//     const features = new APIFeatures(Tour.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate();
//     const tours = await features.query;
//     res.status(200).json({
//       status: 'success',
//       requestedTime: req.requestTime,
//       results: tours.length,
//       data: {
//         tours: tours,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };
exports.getUser = async (req, res) => {
  try {
    let user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
      });
      if (user) {
        res.status(200).json({
          status: 'success',
          data: {
            user: user,
          },
        });
      } else {
        throw new Error('User does not exist');
      }
    } else {
      throw new Error('User does not exist');
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.createUser = async (req, res) => {
  try {
    console.log('Create User:', req.body);
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fails',
      message: 'Invalid Data Set',
    });
  }
};
exports.registerCourse = async (req, res) => {
  try {
    console.log('Register Course:', req.body);
    const newUser = await User.updateOne(
      { _id: req.body.userID },
      { $push: { registeredCourses: { courseID: req.body.courseID } } }
    );
    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    console.log('Error', err);
    res.status(400).json({
      status: 'fails',
      message: 'Invalid Data Set',
    });
  }
};
// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     //new=true will return th updated document
//     //runValidotrs will check the type of updated valueif it matches the type then it will update the value otherwise not
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour: tour,
//       },
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fails',
//       message: 'Invalid Data Set',
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndDelete(req.params.id);
//     res.status(200).json({
//       status: 'success',
//       data: tour,
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fails',
//       message: err,
//     });
//   }
// };
