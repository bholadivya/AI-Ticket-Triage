import express from "express";
import {
  analyzeNewTicket,
  getAllTickets
} from "../controllers/ticketController.js";

const router = express.Router();

router.post("/analyze", analyzeNewTicket);
router.get("/", getAllTickets);

export default router;
