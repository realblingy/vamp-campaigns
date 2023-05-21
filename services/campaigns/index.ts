import { db } from "./database";
import Campaign from "../../models/campaigns";
import { collection, getDocs, query, where } from "firebase/firestore";

export const fetchCampaigns = async (team_id: number): Promise<Campaign[]> => {
  const campaignQuery = query(
    collection(db, "campaigns"),
    where("team_id", "==", team_id)
  );

  const querySnapShot = await getDocs(campaignQuery);
  const campaigns = querySnapShot.docs.map((campaign) => campaign.data());
  return campaigns as Campaign[];
};
