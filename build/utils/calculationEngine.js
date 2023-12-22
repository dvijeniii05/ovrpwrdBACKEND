"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculation = void 0;
const heroImageUrlCreator_1 = require("./heroImageUrlCreator");
const calculation = (recentMatches, hasBonusMatch) => {
    let newPoints = 0;
    let parsedMatches = [];
    recentMatches.map((singleMatch, index) => {
        var _a;
        const isBonusMatch = hasBonusMatch && index === recentMatches.length - 1;
        console.log("BONUS_CHECK", isBonusMatch, index, singleMatch.match_id);
        const bonusMultiplier = isBonusMatch ? 2 : 1;
        const isTurboOrRanking = singleMatch.game_mode == 22 || singleMatch.game_mode == 23;
        const isTurbo = singleMatch.game_mode == 23;
        //only calculate 22 or 23 game mode matches AND half the points for 23 game mode (turbo)
        if (isTurboOrRanking) {
            const isSupport = () => {
                if (singleMatch.duration / 60 < 25) {
                    const lastHitsCheck = singleMatch.last_hits < (isTurbo ? 60 : 40);
                    return lastHitsCheck ? true : false;
                }
                else if (singleMatch.duration / 60 < 28) {
                    const lastHitsCheck = singleMatch.last_hits < (isTurbo ? 90 : 60);
                    return lastHitsCheck ? true : false;
                }
                else if (singleMatch.duration / 60 < 50) {
                    const lastHitsCheck = singleMatch.last_hits < (isTurbo ? 180 : 120);
                    return lastHitsCheck ? true : false;
                }
                else if (singleMatch.duration / 60 > 50) {
                    const lastHitsCheck = singleMatch.last_hits < (isTurbo ? 450 : 300);
                    return lastHitsCheck ? true : false;
                }
            };
            const deathCorrection = singleMatch.deaths == 0 ? 1 : singleMatch.deaths;
            const kda = Math.floor((singleMatch.kills + singleMatch.assists) / deathCorrection);
            const kdaPoints = kda * 2 + 2;
            const damagePoints = Math.round((2 * singleMatch.hero_damage) / 1000);
            const isRadiant = (_a = singleMatch.player_slot <= 127) !== null && _a !== void 0 ? _a : false;
            const matchResultsPoints = isRadiant == singleMatch.radiant_win ? 100 : 40;
            const totalMatchPoints = damagePoints + matchResultsPoints + kdaPoints;
            const roleDependingPoints = isSupport()
                ? totalMatchPoints * 1.2
                : totalMatchPoints;
            const finalMatchPoints = isTurbo
                ? Math.round(bonusMultiplier * 0.5 * roleDependingPoints * 1e12) / 1e12
                : Math.round(bonusMultiplier * roleDependingPoints * 1e12) / 1e12;
            newPoints += finalMatchPoints;
            parsedMatches.push({
                isWin: isRadiant == singleMatch.radiant_win ? true : false,
                hero: singleMatch.hero_id,
                time: singleMatch.start_time,
                points: finalMatchPoints,
                heroUrl: (0, heroImageUrlCreator_1.createHeroImageUrl)(singleMatch.hero_id),
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
exports.calculation = calculation;
