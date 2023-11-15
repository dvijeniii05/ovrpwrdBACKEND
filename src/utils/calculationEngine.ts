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
  matchId: number;
  gameMode: string;
}

export const calculation = (recentMatches: MatchData[]) => {
  let newPoints: number = 0;
  let parsedMatches: ParsedMatch[] = [];
  recentMatches.map((singleMatch) => {
    const isTurboOrRanking =
      singleMatch.game_mode == 22 || singleMatch.game_mode == 23;
    const isTurbo = singleMatch.game_mode == 23;
    //only calculate 22 or 23 game mode matches AND half the points for 23 game mode (turbo)
    if (isTurboOrRanking) {
      const isSupport = () => {
        if (singleMatch.duration / 60 < 25) {
          const lastHitsCheck = singleMatch.last_hits < (isTurbo ? 60 : 40);
          return lastHitsCheck ? true : false;
        } else if (singleMatch.duration / 60 < 28) {
          const lastHitsCheck = singleMatch.last_hits < (isTurbo ? 90 : 60);
          return lastHitsCheck ? true : false;
        } else if (singleMatch.duration / 60 < 50) {
          const lastHitsCheck = singleMatch.last_hits < (isTurbo ? 180 : 120);
          return lastHitsCheck ? true : false;
        } else if (singleMatch.duration / 60 > 50) {
          const lastHitsCheck = singleMatch.last_hits < (isTurbo ? 450 : 300);
          return lastHitsCheck ? true : false;
        }
      };
      const deathCorrection = singleMatch.deaths == 0 ? 1 : singleMatch.deaths;
      const kda = Math.floor(
        (singleMatch.kills + singleMatch.assists) / deathCorrection
      );
      const kdaPoints = kda * 2 + 2;
      const damagePoints = Math.round((2 * singleMatch.hero_damage) / 1000);
      const isRadiant = singleMatch.player_slot <= 127 ?? false;
      const matchResultsPoints =
        isRadiant == singleMatch.radiant_win ? 100 : 40;
      const totalMatchPoints = damagePoints + matchResultsPoints + kdaPoints;
      const roleDependingPoints = isSupport()
        ? totalMatchPoints * 1.2
        : totalMatchPoints;
      const finalMatchPoints = isTurbo
        ? Math.round(0.5 * roleDependingPoints * 1e12) / 1e12
        : Math.round(roleDependingPoints * 1e12) / 1e12;
      newPoints += finalMatchPoints;
      parsedMatches.push({
        isWin: isRadiant == singleMatch.radiant_win ? true : false,
        hero: singleMatch.hero_id, // parse this into actual hero name
        time: singleMatch.start_time,
        points: finalMatchPoints,
        heroUrl: createHeroImageUrl(singleMatch.hero_id),
        kills: singleMatch.kills,
        deaths: singleMatch.deaths,
        assists: singleMatch.assists,
        matchId: singleMatch.match_id,
        gameMode: isTurbo ? "turbo" : "ranking",
      });
    }
  });
  return { newPoints: Math.round(newPoints), parsedMatches };
};
