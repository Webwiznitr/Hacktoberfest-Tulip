import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes/routes";
import cors from "cors";

// Load environment variables from a .env file if it exists
dotenv.config();

// Create an Express application
const app: express.Express = express();
const port = process.env.PORT || 5001;

// Apply middleware
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the route defined in the routes folder
app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Server is running!<br>Looks everything's fine.");
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Refactoring Completed.`);
});
