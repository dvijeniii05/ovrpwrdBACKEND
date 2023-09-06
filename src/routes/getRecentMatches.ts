import express from "express";
import axios from "axios";

type MatchData = {
  match_id: number;
  player_slot: number;
  radiant_win: boolean;
  duration: number;
  game_mode: number;
  lobby_type: number;
  hero_damage: number;
  hero_healing: number;
  kills: number;
  deaths: number;
  assists: number;
  start_time: number;
};

export const router = express.Router();
export const openDotaApi = "https://api.opendota.com/api";
const stratzRest = "https://api.stratz.com/api/v1";
const startzGraphql = "https://api.stratz.com/graphql";
const startzBearerToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvaWQvNzY1NjExOTgzMjc2NjIxMTgiLCJ1bmlxdWVfbmFtZSI6ItCo0LDRgNCwINCR0YPQu9C70LXRgiIsIlN1YmplY3QiOiI1M2U3MjUwOC1hN2U3LTRmYTEtYWY0Yi01ODU0Nzk3MzFjYTIiLCJTdGVhbUlkIjoiMzY3Mzk2MzkwIiwibmJmIjoxNjgzMDUzNzY0LCJleHAiOjE3MTQ1ODk3NjQsImlhdCI6MTY4MzA1Mzc2NCwiaXNzIjoiaHR0cHM6Ly9hcGkuc3RyYXR6LmNvbSJ9.pp80O2TeMJ9HQUsKklXZayLc5mBDANwWZMEccZfgZPY";

router.get("/startingMatchData/:steamID32", async (req, res) => {
  const { steamID32 } = req.params;

  const recentMatches = await axios.get(
    `${openDotaApi}/players/${steamID32}/recentMatches`
    // {
    //   headers: {
    //     Authorization: `Bearer ${startzBearerToken}`,
    //   },
    // }
  );

  const startingGameTime: number = recentMatches.data[0].start_time;
  const startingGameID: number = recentMatches.data[0].match_id;

  res.status(200).send({ startingGameID, startingGameTime });
});

router.get("/getMatches/:steamID32/:startGameId", async (req, res) => {
  const { steamID32, startGameId } = req.params;

  const recentMatches: { data: MatchData[] } = await axios.get(
    `${openDotaApi}/players/${steamID32}/matches?significant=0&limit=100&project=hero_damage&project=hero_healing&project=kills&project=deaths&project=assists&project=start_time&project=duration&project=game_mode`
    // {
    //   headers: { Authorization: `Bearer ${startzBearerToken}` },
    // }
  );

  const fromThisGame = recentMatches.data.findIndex(
    (match) => match.match_id === Number("7225084321")
  );

  const newGames = recentMatches.data.slice(0, fromThisGame);

  console.log("INdex", newGames.length);
  res.status(200).send(newGames);
});
