const app = require("./src/app");
const port = 3001;

const server = app.listen(port, () => {
  console.log(`Web app running on port ${port}`);
});

// exit program
process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server has been closed");
    process.exit(0);
  });
});
