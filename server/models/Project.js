import mongoose from 'mongoose';

const projectSchema = mongoose.Schema(
  {
    userId: {
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
    saved: {
      type: Map,
      of: Boolean,
    }
  },
    {timestamps: true},
);

const Project = mongoose.model('Project', projectSchema);
export default Project;