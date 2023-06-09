const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}...`);
});

module.exports = app;
