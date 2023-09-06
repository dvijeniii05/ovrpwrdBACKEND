"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHeroImageUrl = void 0;
const heroNameMapper_1 = require("./heroNameMapper");
const createHeroImageUrl = (heroID) => {
    const heroName = (0, heroNameMapper_1.heroNameMaper)(heroID);
    if (heroName != undefined) {
        const actualName = heroName.split("npc_dota_hero_").pop();
        const url = `https://cdn.dota2.com/apps/dota2/images/heroes/${actualName}_full.png`;
        return url;
    }
    else {
        return ""; // NO hero name found
    }
};
exports.createHeroImageUrl = createHeroImageUrl;
