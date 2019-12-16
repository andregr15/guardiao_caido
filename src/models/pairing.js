import mongoose from 'mongoose';

const pairingSchema = new mongoose.Schema({
  creatorTag: String,
  responsibleTag: String,
  description: String,
  date: Date,
  vacancies: Number,
  members: [{
    memberTag: String,
  }],
  reservedMembers: [{
    memberTag: String,
  }],
});

const Pairing = mongoose.model('Pairing', pairingSchema);
