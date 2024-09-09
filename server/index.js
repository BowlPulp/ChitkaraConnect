const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const StudentModel = require('./models/Student')
const AdminPostModel = require('./models/Admin')
const EventModel = require('./models/Event'); // Import the Event model
const TeacherModel = require('./models/Teacher'); // Import the Teacher model
const { default: loginController } = require("./control/loginController")

const app = express()
app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173" // Assuming your React app is running on this port
}));

mongoose.connect("mongodb+srv://kartikarora5832:12345@cluster0.v5gh7.mongodb.net/student");

// Student Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  StudentModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ success: true, rollNo: user.RollNo });
        } else {
          res.json({ success: false, message: "The Password is incorrect" });
        }
      } else {
        res.json({ success: false, message: "No user found" });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ success: false, message: "An error occurred" });
    });
});


// const loginRoutes = require('./routes/loginRoute')
// // / Student Login Route
// app.post("/", loginRoutes);

// Student Registration Route
app.post("/register", (req, res) => {
  StudentModel.create(req.body)
    .then(students => res.json(students))
    .catch(err => res.json(err))
})

// Student GET Route
app.get("/student/:rollno", async (req, res) => {
  try {
    const { rollno } = req.params;
    const RollNo = rollno.toString();
    console.log(`Received request to find RollNo: ${RollNo}`);
    console.log(typeof RollNo);

    const student = await StudentModel.findOne({ RollNo: RollNo });

    if (student) {
      console.log(`Found student: ${JSON.stringify(student)}`);
      return res.json(student);
    } else {
      console.log("Student not found");
      return res.status(404).json({ message: "Student not found" });
    }
  } catch (err) {
    console.error("Error occurred:", err);
    return res.status(500).json({ message: "An error occurred" });
  }
});

// Student Update Route
app.put("/student/:rollno", async (req, res) => {
  const { rollno } = req.params;
  const updatedData = req.body;

  try {
    const updatedStudent = await StudentModel.findOneAndUpdate(
      { RollNo: rollno },
      updatedData,
      { new: true }
    );

    if (updatedStudent) {
      res.json(updatedStudent);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (err) {
    console.error("Error updating student:", err);
    res.status(500).json({ message: "An error occurred" });
  }
});

///// ADMIN PANEL /////
// Post on Home
app.get("/adminposts", async (req, res) => {
  try {
    const adminPosts = await AdminPostModel.find();
    res.json(adminPosts);
  } catch (err) {
    console.error("Error fetching admin posts:", err);
    res.status(500).json({ message: "An error occurred while fetching admin posts" });
  }
});
// Admin route posting
app.post("/admin", (req, res) => {
  AdminPostModel.create(req.body)
    .then(adminpost => res.json(adminpost))
    .catch(err => res.json(err))
})

// Event Routes - 
app.post("/admin/post-event", (req, res) => {
  console.log("Request Body:", req.body);
  EventModel.create(req.body)
    .then(event => res.json(event))
    .catch(err => {
      console.error("Error creating event:", err);
      res.status(500).json({ message: "An error occurred while creating the event" });
    });
});

// Events on home
app.get("/admin/events", async (req, res) => {
  try {
    const events = await EventModel.find();
    res.json(events);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ message: "An error occurred while fetching events" });
  }
});

///// TEACHER PANEL /////
// Teacher Registration Route
app.post("/register-teacher", async (req, res) => {
  const { name, email, password, employeeId, department, qualification, experience, phoneNo } = req.body;

  try {
    const existingTeacher = await TeacherModel.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ message: 'Teacher already exists' });
    }

    const newTeacher = new TeacherModel({
      name,
      email,
      password,
      employeeId,
      department,
      qualification,
      experience,
      phoneNo,
    });

    await newTeacher.save();
    res.status(201).json({ message: 'Teacher registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Teacher Login Route
app.post('/login-teacher', async (req, res) => {
  const { email, password } = req.body;

  try {
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.json({ success: false, message: 'Invalid email or password!' });
    }

    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.json({ success: false, message: 'Invalid email or password!' });
    }

    // Return employeeId along with the success response
    res.json({ success: true, employeeId: teacher.employeeId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});



// Assuming you have a model named TeacherModel to fetch teacher data
app.get("/teacher/:employeeid", async (req, res) => {
  try {
    const { employeeid } = req.params;
    const employeeId = employeeid.toString();
    console.log(`Received request to find EmployeeID: ${employeeId}`);
    console.log(typeof employeeId);

    // Query the TeacherModel using the employeeId
    const teacher = await TeacherModel.findOne({ EmployeeID: employeeId });

    if (teacher) {
      console.log(`Found teacher: ${JSON.stringify(teacher)}`);
      return res.json(teacher);
    } else {
      console.log("Teacher not found");
      return res.status(404).json({ message: "Teacher not found" });
    }
  } catch (err) {
    console.error("Error occurred:", err);
    return res.status(500).json({ message: "An error occurred" });
  }
});


// Fetch all posts
app.get('/admin/posts', async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

// // Delete a post by ID
// app.delete('/admin/posts/:id', async (req, res) => {
//   try {
//     const postId = req.params.id;
//     await PostModel.findByIdAndDelete(postId);
//     res.json({ success: true });
//   } catch (err) {
//     res.status(500).json({ message: 'An error occurred' });
//   }
// });





app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
