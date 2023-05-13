import express from "express";
import axios from "axios";

export const router = express.Router();
const openDotaApi = "https://api.opendota.com/api";
const stratzRest = "https://api.stratz.com/api/v1";
const startzGraphql = "https://api.stratz.com/graphql";
const startzBearerToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvaWQvNzY1NjExOTgzMjc2NjIxMTgiLCJ1bmlxdWVfbmFtZSI6ItCo0LDRgNCwINCR0YPQu9C70LXRgiIsIlN1YmplY3QiOiI1M2U3MjUwOC1hN2U3LTRmYTEtYWY0Yi01ODU0Nzk3MzFjYTIiLCJTdGVhbUlkIjoiMzY3Mzk2MzkwIiwibmJmIjoxNjgzMDUzNzY0LCJleHAiOjE3MTQ1ODk3NjQsImlhdCI6MTY4MzA1Mzc2NCwiaXNzIjoiaHR0cHM6Ly9hcGkuc3RyYXR6LmNvbSJ9.pp80O2TeMJ9HQUsKklXZayLc5mBDANwWZMEccZfgZPY";

router.get("/startingMatchData/:steamID32", async (req, res) => {
  const { steamID32 } = req.params;

  // const recentMatches = await axios.get(`${openDotaApi}/players/${steamID32}`);
  const recentMatches = await axios.get(
    `${stratzRest}/Player/${steamID32}/matches`,
    {
      headers: {
        Authorization: `Bearer ${startzBearerToken}`,
      },
    }
  );
  // console.log("RECENT_MATCHES", recentMatches);

  const startingGameTime: number = recentMatches.data[0].startDateTime;
  const startingGameID: number = recentMatches.data[0].id;
  console.log(startingGameID, startingGameTime);
  // All stats will be counted starting from the lastGameID and lastGameTime

  res.status(200).send({ startingGameID, startingGameTime });
});

router.get("/getMatches/:steamID32/:startDateTime", async (req, res) => {
  const { steamID32, startDateTime } = req.params;

  const recentMatches = await axios.get(
    `${stratzRest}/Player/${steamID32}/matches?isParsed=true&startDateTime=${startDateTime}`,
    {
      headers: { Authorization: `Bearer ${startzBearerToken}` },
    }
  );
  // console.log(recentMatches.data[0]);

  res.status(200).send(recentMatches.data);
});
