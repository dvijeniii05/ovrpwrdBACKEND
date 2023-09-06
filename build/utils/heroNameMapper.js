"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroNameMaper = void 0;
const heroNames_1 = require("../constants/heroNames");
const heroNameMaper = (heroID) => {
    const heroName = heroNames_1.heroNames.find((item) => item.hero_id === heroID);
    return heroName === null || heroName === void 0 ? void 0 : heroName.hero_name;
};
exports.heroNameMaper = heroNameMaper;
