import mongoose from 'mongoose';

let db = null;

export default function connectDatabase(connectionUrl) {
  if (!db) {
    db = mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on('error', () => {
      process.exit();
    });

    mongoose.connection.once('open', () => {
      console.log('mongodb connected');
    });
  }

  return db;
};
