import Post from '../models/post.js';

/* CREATE */
// Find all posts with the provided user ID

export const getUserSaved = async (req, res) => {
  try {
    const {userId} = req.params;
    const post = await Post.find({userId});
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

/* UPDATE */
export const saved = async (req, res) => {
  try {
    const {id} = req.params;
    const {userId} = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {likes: post.likes},
      {new: true},
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};