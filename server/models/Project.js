import mongoose from 'mongoose';

const projectSchema = mongoose.Schema(
  {
    projectOwnerId: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    info: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },

    picturePath: {
      type: String,
      default: '',
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    members: [{
      userId: {
        type: String,
      }
    }]
  },
    {timestamps: true},
);

const Project = new mongoose.model('Project', projectSchema);
export default Project;