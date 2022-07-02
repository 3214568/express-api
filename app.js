// Build a server with Node's HTTP module

// Import packages and set the port
import express from 'express';
import bodyParser from "body-parser";
import routes from "./routes/routes.js";


const port = 3002;
const app = express();

routes(app);

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// Start the server
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});