import { NextFunction, Request, Response, Router } from "express";
import { fetchCampaigns } from "../services/campaigns";

const CampaignsController = Router();

CampaignsController.use((req: Request, res: Response, next: NextFunction) => {
  console.log(
    `Accessing campaigns controller at /campaigns${
      req.path
    } - ${new Date().toISOString()}`
  );
  next();
});

CampaignsController.get("/:team_id", async (req: Request, res: Response) => {
  const teamId = parseInt(req.params.team_id);
  try {
    const result = await fetchCampaigns(teamId);
    res.status(200).json({
      status: 200,
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 400,
      message: `Could not retrieve campaigns with team_id: ${teamId}`,
    });
  }
});

export default CampaignsController;
