import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [initialLoading, setInitialLoading] = useState(true);

  const fetchTickets = async (retry = true) => {
    try {
      const res = await axios.get(
        "https://ai-ticket-triage-backend.onrender.com/tickets",
      );
      setTickets(res.data);
      setError("");
    } catch (err) {
      if (retry) {
        setTimeout(() => fetchTickets(false), 3000);
      } else {
        setError("Failed to load ticket history");
      }
    } finally {
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const submitTicket = async () => {
    if (!message.trim()) {
      setError("Please enter a support ticket");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://ai-ticket-triage-backend.onrender.com/tickets/analyze",
        {
          message,
        },
      );

      setResult(res.data);
      setMessage("");
      fetchTickets();
    } catch (err) {
      setError("Failed to analyze ticket");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="main-card">
        <h1 className="heading">AI Ticket Triage</h1>

        <textarea
          className="ticket-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your support issue..."
        />

        <button
          className="analyze-btn"
          onClick={submitTicket}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Ticket"}
        </button>

        {initialLoading ? (
          <p>Loading tickets...</p>
        ) : error ? (
          <p className="error-text">{error}</p>
        ) : null}

        {result && (
          <div className="result-card">
            <h2 className="section-title">Latest Analysis</h2>
            <p>
              <b>Category:</b> {result.category}
            </p>
            <p>
              <b>Priority:</b>{" "}
              <span className="priority-badge">{result.priority}</span>
            </p>
            <p>
              <b>Urgency:</b> {result.urgency ? "Yes" : "No"}
            </p>
            <p>
              <b>Confidence:</b> {result.confidence}%
            </p>
            <p>
              <b>Keywords:</b> {result.keywords.join(", ")}
            </p>
          </div>
        )}

        <div className="ticket-history">
          <h2 className="section-title">Previous Tickets</h2>

          {tickets.map((ticket) => (
            <div className="history-card" key={ticket._id}>
              <p>
                <b>Message:</b> {ticket.message}
              </p>
              <p>
                <b>Category:</b> {ticket.category}
              </p>
              <p>
                <b>Priority:</b>{" "}
                <span className="priority-badge">{ticket.priority}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
