const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Home Route
app.get("/", (req, res) => {
  res.send("Rawad Store Backend is running 🚀");
});

// ✅ Pi Payment Verification (Dummy Example)
app.post("/pi/verify", (req, res) => {
  const { txid, username, amount } = req.body;
  
  // هنا مكان التحقق من الدفع في Testnet / Mainnet
  console.log("Payment received:", { txid, username, amount });

  res.json({ status: "success", message: "Payment verified successfully" });
});

// ✅ Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
