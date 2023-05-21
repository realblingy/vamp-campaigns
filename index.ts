import express, { Express, Request, Response, Router } from "express";
import dotenv from "dotenv";
import CampaignsController from "./controllers/campaigns";
import TeamsController from "./controllers/teams";
// import { getTeams, getCampaigns } from './models';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Vamp! Welcome to my server. :D");
});

app.use("/campaigns", CampaignsController);

app.use("/teams", TeamsController);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
