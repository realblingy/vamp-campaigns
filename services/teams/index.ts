import { db } from "../database";
import Team from "../../models/teams";
import { collection, getDocs, limit, query, where } from "firebase/firestore";

export const fetchTeamByCode = async (code: string): Promise<Team> => {
  const teamQuery = query(
    collection(db, "teams"),
    where("code", "==", code),
    limit(1)
  );

  const querySnapShot = await getDocs(teamQuery);
  const team = querySnapShot.docs.map((team) => team.data())[0];

  if (!team) {
    throw new Error(`Could not find team with team code ${code}`);
  }

  return team as Team;
};
