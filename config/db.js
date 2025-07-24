require('dotenv').config(); // If you're using dotenv for local development

const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI; // Access the MONGODB_URI environment variable

if (!mongoURI) {
  console.error('MONGODB_URI is not defined in environment variables.');
  process.exit(1); // Exit the process if the URI is missing
}

mongoose.connect(mongoURI, {
  // Optional: Mongoose connection options (adjust as needed)
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true, // Deprecated in Mongoose 6, not needed in newer versions
  // useFindAndModify: false // Deprecated in Mongoose 6, not needed in newer versions
})
.then(() => console.log('MongoDB connected successfully!'))
.catch(err => console.error('MongoDB connection error:', err));

// Your Mongoose models and other application logic
1);
  }
};

module.exports = connectDB;
