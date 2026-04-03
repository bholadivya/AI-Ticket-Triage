const categoryKeywords = {
  Billing: ["payment", "refund", "invoice", "charged"],
  Technical: ["error", "bug", "crash", "issue", "failed"],
  Account: ["login", "password", "account", "signup"],
  Feature: ["feature", "request", "enhancement"],
};

const urgentWords = ["urgent", "asap", "critical", "immediately", "down"];

const securityWords = ["hacked", "breach", "unauthorized"];

export const analyzeTicket = (message) => {
  const text = message.toLowerCase();

  let category = "Other";
  let matchedKeywords = [];
  let maxMatches = 0;

  for (const key in categoryKeywords) {
    const matches = categoryKeywords[key].filter((word) => text.includes(word));

    if (matches.length > maxMatches) {
      maxMatches = matches.length;
      category = key;
      matchedKeywords = matches;
    }
  }

  const isUrgent = urgentWords.some((word) => text.includes(word));

  let priority = "P3";

  // custom security escalation rule
  if (securityWords.some((word) => text.includes(word))) {
    priority = "P0";
  } else if (isUrgent) {
    priority = "P1";
  } else if (maxMatches >= 2) {
    priority = "P2";
  }

  const confidence =
    category === "Other" ? 40 : Math.min(60 + maxMatches * 15, 95);

  return {
    category,
    priority,
    urgency: isUrgent,
    confidence,
    keywords: matchedKeywords,
  };
};
