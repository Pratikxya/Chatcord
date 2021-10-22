const express = require("express");

const app = express();

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Example app running on ${PORT}`));
