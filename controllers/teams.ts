import { NextFunction, Request, Response, Router } from "express";
import { fetchTeamByCode } from "../services/teams";

const TeamsController = Router();

TeamsController.use((req: Request, res: Response, next: NextFunction) => {
  console.log(
    `Accessing campaigns controller at /teams${
      req.path
    } - ${new Date().toISOString()}`
  );
  next();
});

TeamsController.get("/:code", async (req: Request, res: Response) => {
  const code = req.params.code;
  try {
    const result = await fetchTeamByCode(code);
    res.status(200).json({
      status: 200,
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 400,
      message: `Could not retrieve campaigns with code: ${code}`,
    });
  }
});

export default TeamsController;
