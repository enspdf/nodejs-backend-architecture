const { Router } = require("express");
const { ParseInteMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function ({ IdeaController }) {
  const router = Router();

  router.get("/", [ParseInteMiddleware], IdeaController.getAll);
  router.get("/:ideaId", IdeaController.get);
  router.get("/:userId/all", IdeaController.getUserIdeas);
  router.post("/", IdeaController.create);
  router.patch("/:ideaId", AuthMiddleware, IdeaController.update);
  router.delete("/:ideaId", AuthMiddleware, IdeaController.delete);
  router.post("/:ideaId/upvote", AuthMiddleware, IdeaController.upvoteIdea);
  router.post("/:ideaId/downvote", AuthMiddleware, IdeaController.downvoteIdea);

  return router;
};
