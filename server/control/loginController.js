// export default loginController = (req, res) => {
//     const { email, password } = req.body;
//     StudentModel.findOne({ email: email })
//       .then(user => {
//         if (user) {
//           if (user.password === password) {
//             res.json({ success: true, rollNo: user.RollNo });
//           } else {
//             res.json({ success: false, message: "The Password is incorrect" });
//           }
//         } else {
//           res.json({ success: false, message: "No user found" });
//         }
//       })
//       .catch(err => {
//         console.error(err);
//         res.status(500).json({ success: false, message: "An error occurred" });
//       });
//   }