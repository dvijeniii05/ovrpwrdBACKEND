"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculation = void 0;
const heroImageUrlCreator_1 = require("./heroImageUrlCreator");
const calculation = (recentMatches) => {
    let newPoints = 0;
    let parsedMatches = [];
    recentMatches.map((singleMatch) => {
        var _a;
        const deathCorrection = singleMatch.deaths == 0 ? 1 : singleMatch.deaths;
        const kda = Math.floor((singleMatch.kills + singleMatch.assists) / deathCorrection);
        const kdaPoints = kda * 2 + 2;
        const damagePoints = Math.round((2 * singleMatch.hero_damage) / 1000);
        const isRadiant = (_a = singleMatch.player_slot <= 127) !== null && _a !== void 0 ? _a : false;
        const matchResultsPoints = isRadiant == singleMatch.radiant_win ? 100 : 40;
        const totalMatchPoints = damagePoints + matchResultsPoints + kdaPoints;
        newPoints += totalMatchPoints;
        parsedMatches.push({
            isWin: isRadiant == singleMatch.radiant_win ? true : false,
            hero: singleMatch.hero_id,
            time: singleMatch.start_time,
            points: totalMatchPoints,
            heroUrl: (0, heroImageUrlCreator_1.createHeroImageUrl)(singleMatch.hero_id),
            kills: singleMatch.kills,
            deaths: singleMatch.deaths,
            assists: singleMatch.assists,
        });
    });
    return { newPoints, parsedMatches };
};
exports.calculation = calculation;
