const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://richadas9801:Richa%409801@notesynccluster.dqns4ce.mongodb.net/inotebook?retryWrites=true&w=majority&appName=NoteSyncCluster";  // use Atlas URI from .env

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas successfully");
  } catch (error) {
    console.error("MongoDB Atlas connection error:", error);
  }
};

module.exports = connectToMongo;
