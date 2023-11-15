"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHeroImageUrl = void 0;
const heroNameMapper_1 = require("./heroNameMapper");
const createHeroImageUrl = (heroID) => {
    const heroName = (0, heroNameMapper_1.heroNameMaper)(heroID);
    if (heroName != undefined) {
        const actualName = heroName.split("npc_dota_hero_").pop();
        // const url = `http://localhost:3000/heroes/${actualName}`;
        return actualName !== null && actualName !== void 0 ? actualName : "";
    }
    else {
        return ""; // NO hero name found
    }
};
exports.createHeroImageUrl = createHeroImageUrl;
