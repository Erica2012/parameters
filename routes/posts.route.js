const router = require("express").Router;
const {
  getPosts,
  createPost,
  getPost,
  deletePost,
  updatePost,
} = require("../controllers/posts.controller");


const postRouter = router();

postRouter.route("/").get(getPosts).post(createPost);
postRouter.route("/:postId").get(getPost).patch(updatePost).delete(deletePost);

module.exports = postRouter;
