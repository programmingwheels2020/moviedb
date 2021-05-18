const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/health-check", (req, res) => {
    res.json({ message: "App is running" });
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})