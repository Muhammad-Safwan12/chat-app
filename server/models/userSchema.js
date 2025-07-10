import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },

  profilePic: {
    type: String, // You can store a Cloudinary URL or path here
    default: '',  // Optional default value
  },

  bio: {
    type: String,
    default: '',
  },
}, {
  timestamps: true, // adds createdAt and updatedAt
});

const User = mongoose.model('User', userSchema);
export default User;