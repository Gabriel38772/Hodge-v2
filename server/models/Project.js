import mongoose from 'mongoose';

const projectSchema = mongoose.Schema(
  {
    projectOwnerId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
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
        required: true
      }
    }]
  },
    {timestamps: true},
);

const Project = mongoose.model('Project', projectSchema);
export default Project;