const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send([
    "<h2>Hi There</h2>",
    `<p>Your environment variable: ${process.env.EXAMPLE_VAR}</p>`,
    `<p>Using port ${process.env.PORT} inside container</p>`,
    `<p>Node Environment: ${process.env.NODE_ENVIRONMENT}</p>`,
  ].join(''));
});

app.listen(port, () => console.log(`listening on port ${port}`));
