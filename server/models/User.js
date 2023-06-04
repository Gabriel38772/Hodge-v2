import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema( //Skapar nytt schema i mongo
  {
    //Skapar alla kolumner i användar-schemat och sätter parametrar.
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true, //Inga email dubletter
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: '',
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
    twitter: String,
    linkedIn: String,
  },
  {timestamps: true}, //Ger automatisk info om när saker skapas/uppdateras
);

const User = mongoose.model('User', UserSchema); //Gör schemat till en model vilket är formen som kan utföras querys osv.
export default User;