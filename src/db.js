import mongoose from 'mongoose'

const url = process.env.MONGO_URI || 'mongodb://localhost/test'
mongoose.connect(url);

const db = mongoose.connection;
db.on('error', (err) => {
  console.log('Error connecting to database ', err)
});
db.once('open', function() {
  console.log('Connected to database')
});
