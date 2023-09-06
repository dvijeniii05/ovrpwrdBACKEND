import { MatchData } from "../routes/userAuth";
import { createHeroImageUrl } from "./heroImageUrlCreator";

// add logic for turbo + MMR matches and hero driven points (support hero = boost)

// add logic to evaluate a custom object for each match with point, hero_id, result, points and time to save to user's data

export interface ParsedMatch {
  isWin: boolean;
  hero: number;
  time: number;
  points: number;
  heroUrl: string;
  kills: number;
  deaths: number;
  assists: number;
}

export const calculation = (recentMatches: MatchData[]) => {
  let newPoints: number = 0;
  let parsedMatches: ParsedMatch[] = [];
  recentMatches.map((singleMatch) => {
    const deathCorrection = singleMatch.deaths == 0 ? 1 : singleMatch.deaths;
    const kda = Math.floor(
      (singleMatch.kills + singleMatch.assists) / deathCorrection
    );
    const kdaPoints = kda * 2 + 2;
    const damagePoints = Math.round((2 * singleMatch.hero_damage) / 1000);
    const isRadiant = singleMatch.player_slot <= 127 ?? false;
    const matchResultsPoints = isRadiant == singleMatch.radiant_win ? 100 : 40;
    const totalMatchPoints = damagePoints + matchResultsPoints + kdaPoints;
    newPoints += totalMatchPoints;
    parsedMatches.push({
      isWin: isRadiant == singleMatch.radiant_win ? true : false,
      hero: singleMatch.hero_id, // parse this into actual hero name
      time: singleMatch.start_time,
      points: totalMatchPoints,
      heroUrl: createHeroImageUrl(singleMatch.hero_id),
      kills: singleMatch.kills,
      deaths: singleMatch.deaths,
      assists: singleMatch.assists,
    });
  });
  return { newPoints, parsedMatches };
};
