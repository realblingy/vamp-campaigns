import { doc, setDoc } from "firebase/firestore";
import { db } from "../services/database";
import { campaigns } from "./campaignData/campaigns";
import { teams } from "./campaignData/teams";

campaigns.forEach(async (campaign) => {
  const { id } = campaign;
  try {
    await setDoc(doc(db, "campaigns", id.toString()), campaign);
    console.log("Campaign added: ", id);
  } catch (error) {
    console.log(error);
  }
});

teams.forEach(async (teams) => {
  const { id } = teams;
  try {
    await setDoc(doc(db, "teams", id.toString()), teams);
    console.log("Added team: ", id);
  } catch (error) {
    console.log(error);
  }
});
