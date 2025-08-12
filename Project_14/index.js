const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
app.use(express.json());
const corsOptions = {
    origin: 'http://127.0.0.1:5500', // or '*' to allow all
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true, // important if using cookies or sessions
  };
  
  app.use(cors(corsOptions));
  


  
// Session Store






const store = new MongoDBStore({


  
  uri: 'mongodb+srv://gopalpinapathuni2022:6KQndwo0HBAn86XB@cluster0.frgr424.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  collection: 'mysessions',




});


















// Session Middleware
app.use(session({
  secret: 'SignedUsers',
  resave: false,
  saveUninitialized: false,
  store: store,



}));

// Simple in-memory user (for demo only)
const USER = {
  username: 'gopal',
  password: '1234'
};

// Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    req.session.isAuth = true;
    req.session.username = username;
    return res.send('Logged in successfully');
  }
  res.send('Invalid credentials');
});

// Protected Route
app.get('/dashboard', (req, res) => {
  if (req.session.isAuth) {
    res.send(`Welcome ${req.session.username}`);
  } else {
    res.send('Unauthorized');
  }
});
// Logout Route
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) throw err;
    res.send('Logged out');
  });


});

// MongoDB Connection
const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://gopalpinapathuni2022:6KQndwo0HBAn86XB@cluster0.frgr424.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  } catch (err) {
    console.log(err.message);
  }
};

connectMongoDB();
