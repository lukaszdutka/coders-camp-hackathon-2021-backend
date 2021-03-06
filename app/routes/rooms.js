import express from "express";
import * as roomController from "../controllers/roomController/index.js";
import tokenVerification from "../middlewares/tokenVerification.js";

const router = express.Router();

// GET
router.get("/:id/summary", tokenVerification, roomController.getSummary);
router.get("/:id/answers", roomController.getAnswers);
router.get("/:id/activequestion", roomController.getActiveQuestion);
router.get("/:id", roomController.getRoomById);
router.get("", tokenVerification, roomController.getRooms);

// POST:
router.post("/", tokenVerification, roomController.createRoom);
router.post("/:id/answers", roomController.answerQuestion);

// PATCH:
router.patch("/:id", tokenVerification, roomController.editRoom);
router.patch("/:id/guests", roomController.updateGuests);
router.patch("/:id/close", tokenVerification, roomController.closeRoom);
router.patch("/:id/open", tokenVerification, roomController.openRoom);
export default router;
