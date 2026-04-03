import Ticket from "../models/ticketModel.js";
import { analyzeTicket } from "../services/analyzerService.js";

export const analyzeNewTicket = async (req, res) => {
  try {
    const { message } = req.body;

    // input validation
    if (!message || message.trim().length < 5) {
      return res.status(400).json({
        message: "Ticket message must be at least 5 characters",
      });
    }

    // AI logic
    const result = analyzeTicket(message);

    // save to DB
    const ticket = await Ticket.create({
      message,
      ...result,
    });

    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .sort({
        createdAt: -1,
      })
      .limit(5);

    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
