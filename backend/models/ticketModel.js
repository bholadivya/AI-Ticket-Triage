import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    priority: {
      type: String,
      required: true
    },
    urgency: {
      type: Boolean,
      default: false
    },
    confidence: {
      type: Number,
      required: true
    },
    keywords: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
