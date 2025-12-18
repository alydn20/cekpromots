import express from "express";
import "./whatsapp.js";
import "./popupChecker.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("✅ Treasury Promo WhatsApp Bot Running");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
